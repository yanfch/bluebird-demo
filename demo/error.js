'use strict';

var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

// .error
fs.readFileAsync('myfile.josn').then(JSON.parse).then(function (json) {
  console.log('Successful json');
}).catch(SyntaxError, function () {
  console.error('file contains invalid json');
}).error(function (e) {
  console.error('unable to read file, because: ', e.message);
});