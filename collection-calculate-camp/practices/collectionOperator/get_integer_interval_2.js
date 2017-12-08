'use strict';

function get_integer_interval_2(number_a, number_b) {
  let arr = [];
  for (let begin = Math.min(number_a, number_b); begin <= Math.max(number_a, number_b); begin++) {
    arr.push(begin);
  }
  let result = arr.filter(item => item % 2 === 0);
  return number_a > number_b ? result.reverse() : result;
}

module.exports = get_integer_interval_2;
