'use strict';

function grouping_count(collection) {
  let result = {};
  collection.forEach(ele => {
    if (result[ele.toString()]) {
      ++result[ele.toString()];
    } else {
      result[ele.toString()] = 1;
    }
  });
  return result;
}

var collection = [1, 1, 1, 1, 2, 3, 1, 3, 4, 2, 3, 1, 3, 4, 2];
var result = grouping_count(collection);
console.log(result);
module.exports = grouping_count;
