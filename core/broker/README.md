# who to use ?

```js
const { storeBrokerConnection, getBrokerConnection } = require('./');

// Connect to the broker
storeBrokerConnection(
  "example",
  await new BrokerConnection({
    host: "xxxxx"
    port: 5672
    username: "xxx"
    password: "xxx"
    prefetch: 100
  }).connect()
);

const broker = getBrokerConnection("example");

// CONSUME A QUEUE
// Binds message event
broker.on("TYPE", type.bind(this));

broker.consumeExchange(
  "nameExchance",
  { durable: true },
  "direct|fanout",
  "nameQueue",
  "routingKey",
  { durable: true, exclusive: false }
);

const type = async (payload, res) => {
  console.log(payload)
  res({
    result: 1
  });
};
///////

// SEND A MESSAGE
broker.remoteCall('nameQueue', 'routingKey', 'TYPE', { test: 'example' });
/////

```