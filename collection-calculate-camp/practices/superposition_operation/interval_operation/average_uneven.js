'use strict';

function average_uneven(collection) {
  let arr = collection.filter(item => item % 2 !== 0);
  let result = arr.reduce((pre, cur) => pre + cur);
  return result/arr.length;
}

module.exports = average_uneven;
