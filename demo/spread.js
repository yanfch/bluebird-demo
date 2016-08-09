'use strict';

var redis = require('../common/redis');
var Promise = require('bluebird');

// .spread
function getId(str) {
  return new Promise(function (resolve, reject) {
    if (!str) {
      reject();
    } else {
      resolve();
    }
  });
}

getId('a').then(function () {
  return [redis.get('a'), redis.get('b')];
}).spread(function (a_data, b_data) {
  console.log('a: ' + a_data);
  console.log('b: ' + b_data);
});