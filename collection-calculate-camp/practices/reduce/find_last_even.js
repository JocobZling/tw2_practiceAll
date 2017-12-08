'use strict';

function find_last_even(collection) {
  let arr = collection.filter(item => item % 2 === 0);
  return arr.pop();
}

module.exports = find_last_even;
