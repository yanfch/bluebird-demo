'use strict';

var redis = require('../common/redis');
var Promise = require('bluebird');

// .try 经过try封装后, 同步异常异步异常都可以通过Promise的.catch捕获
function getId(id) {
  return Promise.try(function () {
    if (typeof id !== "string") {
      throw new Error('id must be a string');
    }
    return redis.get(id);
  });
}

getId(11).then(function(data) {
  console.log('data = ' + data);
}).catch(function (e) {
  console.error(e);
});