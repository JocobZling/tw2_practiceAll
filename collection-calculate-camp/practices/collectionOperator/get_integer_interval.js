'use strict';

function get_integer_interval(number_a, number_b) {
  let result = [];
  for (let begin = Math.min(number_a, number_b); begin <= Math.max(number_a, number_b); begin++) {
    result.push(begin);
  }
  return number_a > number_b ? result.reverse() : result;
}

//reverse() 方法将数组中元素的位置颠倒。第一个数组元素成为最后一个数组元素，最后一个数组元素成为第一个。
module.exports = get_integer_interval;

