'use strict';

function calculate_elements_sum(collection) {
  let result = collection.reduce((pre, cur) => pre + cur);
  return result;
}

module.exports = calculate_elements_sum;

