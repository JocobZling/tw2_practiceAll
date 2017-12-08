'use strict';

function double_to_one(collection) {
  let middleResult = collection.reduce((arr, ele) => arr.concat(ele), []);
  let result = middleResult.filter((item, index, arr) => arr.indexOf(item) === index);
  return result;
}

module.exports = double_to_one;
