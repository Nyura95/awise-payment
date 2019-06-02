const redis = require('redis');

module.exports = (parameters, selectDB) => {
  let client = redis.createClient(parameters);
  client.select(selectDB);
  client.on('error', function(err) {
    console.log(err);
  });
  return new Redis(client, parameters.key);
};

class Redis {
  constructor(client, key) {
    this.client = client;
    this.key = key;
  }

  getAsync(value) {
    return new Promise((resolve, reject) => {
      this.client.get(this.key + value, function(err, result) {
        if (err) return reject(err);
        resolve(result);
      });
    });
  }

  setAsync(key, value) {
    return new Promise((resolve, reject) => {
      try {
        value = JSON.stringify(value);
      } catch (err) {
        return reject(err);
      }
      this.client.set(this.key + key, value, function(err, result) {
        if (err) return reject(err);
        resolve(result);
      });
    });
  }
}
