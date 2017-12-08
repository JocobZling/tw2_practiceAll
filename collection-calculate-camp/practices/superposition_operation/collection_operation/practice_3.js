'use strict';

function hybrid_operation_to_uneven(collection) {
  let arr = collection.filter(item => item % 2 !== 0);
  arr.push(arr[0]);
  let result = arr.reduce((pre, cur) => pre + cur * 3 + 5);//第一个为1+3*2
  return result - arr[0];
}

module.exports = hybrid_operation_to_uneven;

