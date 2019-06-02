/*
 * @Author: Nicolas MARTINS 
 * @Date: 2018-04-19 00:09:46 
 * @Last Modified by: Nicolas MARTINS
 * @Last Modified time: 2018-05-22 14:41:15
 */

const { connect } = require('amqplib');

/**
 * Broker connection for handling the messages
 */
class BrokerConnection {
  constructor(options) {
    this.options = options;
    this.conn = null;
    this.channel = null;
    this.listenners = {}; // All listenners that consume some message event
  }

  /**
   * Connect to the broker
   */
  async connect() {
    this.conn = await connect(
      `amqp://${this.options.username}:${this.options.password}@${this.options.host}:${this.options.port}/`
    );

    // Once the connection established open a channel
    this.channel = await this.conn.createChannel();
    this.channel.qos(this.options.prefetch);
    logger.info('Connection with the broker opened with success');

    return this;
  }

  /**
   * Listen some messages incoming from the broker
   * @param {*} name
   * @param {*} callback
   */
  on(name, callback) {
    if (!this.listenners[name]) {
      this.listenners[name] = [callback];
    } else {
      this.listenners[name].push(callback);
    }
  }

  /**
   * Trigger a event
   * @param {*} name
   */
  trigger(name, payload, res) {
    if (this.listenners[name]) {
      for (const i in this.listenners[name]) {
        const l = this.listenners[name][i];
        l(payload, res);
      }
    }
  }

  /**
   * Consume a specific exchange
   * @param {*} exchangeName
   * @param {*} defaultOptions
   */
  async consumeExchange(exchangeName, defaultOptions, type, queueName, queueRouting, queueOptions) {
    await this.channel.assertExchange(exchangeName, type, defaultOptions);
    await this.consumeQueue(queueName, exchangeName, queueRouting, queueOptions);
  }

  /**
   * Consume a specific queue
   * @param {*} queueName
   */
  async consumeQueue(queueName, binding = null, routing = '', defaultOptions) {
    // Create the queue first this doesnt exist yet
    await this.channel.assertQueue(queueName, defaultOptions);

    // Check if there a binding to do, then do it a there is one
    if (binding) {
      await this.channel.bindQueue(queueName, binding, routing);
    }

    // Consume the queue after the creation
    this.channel.consume(
      queueName,
      async msg => {
        try {
          // Deserialize the message into a json structure
          const json = JSON.parse(msg.content.toString());
          if (json.callType) {
            this.trigger(json.callType, json.data, res => {
              // If there is a reply queue
              if (msg.properties.replyTo) {
                this.channel.sendToQueue(
                  msg.properties.replyTo,
                  new Buffer(
                    JSON.stringify({
                      callType: json.callType,
                      data: res
                    })
                  ),
                  {
                    correlationId: msg.properties.correlationId
                  }
                );
              }
            });
          }
        } catch (ex) {
          logger.error("Can't parse the incoming message", ex);
        }

        // Send the ack the message to the server
        this.channel.ack(msg);
      },
      { noAck: false }
    );
  }

  /**
   * Call a remote rpc method with rabbitmq
   * @param {*} destination
   * @param {*} routingKey
   * @param {*} name
   * @param {*} payload
   */
  async remoteCall(destination, routingKey, name, payload, timeout = 30000) {
    return new Promise(async (resolve, reject) => {
      logger.debug(`Remote call ${name} to ${destination}`);

      // Create the temporary queue
      const queue = await this.channel.assertQueue('', {
        exclusive: true,
        autoDelete: true
      });
      let correlationId = Math.random().toString() + Math.random().toString() + Math.random().toString();
      let isFailed = false;
      let isDone = true;

      // Initialize the timeout
      const timeoutCallback = setTimeout(() => {
        if (isDone) return;
        isFailed = true;
        this.channel.cancel(queue.queue);
        reject(new Error('Timeout, no response given by the queue'));
      }, timeout);

      // Consume the temporary queue for the response
      await this.channel.consume(
        queue.queue,
        msg => {
          if (isFailed) return;
          isDone = true;
          clearTimeout(timeoutCallback);
          if (msg.properties.correlationId == correlationId) {
            this.channel.cancel(queue.queue);
            resolve(JSON.parse(msg.content.toString()).data);
          }
        },
        { noAck: true, consumerTag: queue.queue }
      );

      // Send the message to the destination
      if (routingKey == null) {
        this.channel.sendToQueue(
          destination,
          new Buffer(
            JSON.stringify({
              callType: name,
              data: payload
            })
          ),
          { correlationId: correlationId, replyTo: queue.queue }
        );
      } else {
        this.channel.publish(
          destination,
          routingKey,
          new Buffer(
            JSON.stringify({
              callType: name,
              data: payload
            })
          ),
          { correlationId: correlationId, replyTo: queue.queue }
        );
      }
    });
  }
}

module.exports = BrokerConnection;
