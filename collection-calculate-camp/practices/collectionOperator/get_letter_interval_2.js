'use strict';

function get_letter_interval_2(number_a, number_b) {
  let result = [];
  for (let begin = Math.min(number_a, number_b); begin <= Math.max(number_a, number_b); begin++) {
    result.push(get_letter(begin));
  }
  return number_a > number_b ? result.reverse() : result;
}

function get_letter(number) {
  let result = [];
  if (number % 26 === 0) {
    result.push('z');
    number > 26 ? result.unshift(String.fromCharCode(Math.floor(number / 26) + 95)) : null;
  } else {
    result.push(String.fromCharCode(number % 26 + 96));
    number > 26 ? result.unshift(String.fromCharCode(Math.floor(number / 26) + 96)) : null;
  }
  return result.join('');
}

module.exports = get_letter_interval_2;

