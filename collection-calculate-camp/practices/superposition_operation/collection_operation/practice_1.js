'use strict';

function hybrid_operation(collection) {
  collection.push(collection[0]);
  let result = collection.reduce((pre, cur) => pre + cur * 3 + 2);//第一个为1+3*2
  return result - collection[0];
}

module.exports = hybrid_operation;

