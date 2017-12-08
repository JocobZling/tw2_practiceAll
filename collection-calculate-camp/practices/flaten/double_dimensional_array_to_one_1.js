'use strict';

function double_to_one(collection) {
  let result = collection.reduce((arr, ele) => arr.concat(ele), []);
  return result;
}

module.exports = double_to_one;
