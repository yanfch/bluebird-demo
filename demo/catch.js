'use strict';

var redis = require('../common/redis');

// .catch 自定义异常
function MyCustomError(message) {
  this.message = message;
  this.name = "MyCustomError";
  Error.captureStackTrace(this, MyCustomError);
}

MyCustomError.prototype = Object.create(Error.prototype);
MyCustomError.prototype.constructor = MyCustomError;

redis.get('a').then(function (reply) {
  throw new MyCustomError('自定义异常');
}).catch(MyCustomError, function (e) {
  console.error(e);
});