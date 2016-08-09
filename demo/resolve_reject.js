'use strict';

var redis = require('../common/redis');
var Promise = require('bluebird');

// Promise.resolve
// 快速创建一个 Promise，如果参数原来是 Promise，返回值跟原来的 Promise 一致，
// 如果原来不是 Promise，参数值会被包装给 then 的第一个参数函数，所以可以用来封装不确定是不是 Promise 的值。

Promise.resolve(1);
// 相当于
new Promise(function (resolve, reject) {
  resolve(1);
});

Promise.resolve(redis.get('a')).then(function (data) {
  console.log(data);
  return data;
}).catch(function (e) {
  console.error(e);
});

// Promise.reject
// 快速创建一个被 reject 的 Promise，如果参数原来是 Promise，返回值跟原来的 Promise 一致，
// 如果原来不是 Promise，参数值会被包装给 then 的第二个参数函数或者 catch，所以可以用来封装不确定是不是 Promise 的值。

Promise.reject("err");

new Promise(function (resolve, reject) {
  reject("err");
});