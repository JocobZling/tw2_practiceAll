'use strict';

function amount_even(collection) {
  let arr = collection.filter(item => item % 2 === 0);
  let result = arr.reduce((pre, cur) => pre + cur);
  return result;
}

module.exports = amount_even;
