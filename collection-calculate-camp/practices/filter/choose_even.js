'use strict';

function choose_even(collection) {
  let result = collection.filter(item => item % 2 === 0);
  return result;
}

module.exports = choose_even;
