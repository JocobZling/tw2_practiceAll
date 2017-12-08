'use strict';

function get_letter_interval(number_a, number_b) {
  let result = [];
  for (let begin = Math.min(number_a, number_b); begin <= Math.max(number_a, number_b); begin++) {
    result.push(String.fromCharCode(begin+96));
  }
  return number_a > number_b ? result.reverse() : result;
}

module.exports = get_letter_interval;
