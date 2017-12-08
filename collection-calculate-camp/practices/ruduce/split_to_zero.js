'use strict';

function split_to_zero(number, interval) {
  let result = [number];
  while (number > 0) {
    number = parseFloat(number - interval).toFixed(1);
    result.push(parseFloat(number));
  }
  return result;
}
module.exports = split_to_zero;
