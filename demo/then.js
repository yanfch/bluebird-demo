'use strict';

var redis = require('../common/redis');

redis.set('a', 'a').then(function (reply) {
  console.log('then one: ' + reply);
  return redis.set('b', 'b');
}).then(function (reply) {
  console.log('then two: ' + reply);
}).catch(TypeError, ReferenceError, function (e) {
  // 程序异常捕获
//}).catch(NetworkError, TimeoutError, function(e) {
  // 网络异常捕获
}).catch(function (e) {
  // 捕获所有其他异常
  console.error(e);
});