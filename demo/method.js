'use strict';

var redis = require('../common/redis');
var Promise = require('bluebird');

// .method 将函数包装为返回Promise实例的函数
function User() {
  User.prototype.getId = Promise.method(function (input) {
    if (!input) {
      throw new TypeError("input is not valid");
    }
    return redis.get(input);
  });
}

var User = new User();

User.getId('').then(function (data) {
  console.log('.method data = ' + data);
}).catch(TypeError, function (e) {
  console.error(e);
}).catch(function (e) {
  console.error(e);
});