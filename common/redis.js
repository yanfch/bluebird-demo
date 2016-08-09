'use strict';

var redis = require('ioredis');
var client = redis.createClient({
  port: 6379,
  host: '127.0.0.1',
  connect_timeout: 3000,
  db: 0
});

client.on("error", function (err) {
  console.error(err);
});

exports = module.exports = client;