'use strict';

function compute_average(collection) {
  let result = collection.reduce((prev, cur) => prev + cur);
  return result / collection.length;
}

module.exports = compute_average;

