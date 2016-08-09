'use strict';

var redis = require('../common/redis');
var Promise = require('bluebird');

// .join
Promise.join(redis.get('a'), redis.get('b'), function (a_data, b_data) {
  console.log('a: ' + a_data);
  console.log('b: ' + b_data);
});

