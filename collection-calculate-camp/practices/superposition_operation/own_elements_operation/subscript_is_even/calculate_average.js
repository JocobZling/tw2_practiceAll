'use strict';
var calculate_average = function (collection) {
  let arr = [];
  collection.reduce((pre, cur, item) => {
    if ((item + 1) % 2 === 0) {
      arr.push(cur);
    }
  });
  return arr.reduce((pre, cur) => pre + cur) / arr.length;
};
module.exports = calculate_average;
