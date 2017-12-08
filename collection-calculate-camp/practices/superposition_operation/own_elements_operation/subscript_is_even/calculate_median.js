'use strict';
var calculate_median = function (collection) {
  let arr = [];
  collection.reduce((pre, cur, item) => {
    if ((item + 1) % 2 === 0) {
      arr.push(cur);
    }
  });
  console.log(arr);
  let ascRank = arr.sort((itemA, itemB) => itemA - itemB);
  if (arr.length % 2 === 0) {
    return Math.ceil((parseInt(ascRank[arr.length / 2]) + parseInt(ascRank[arr.length / 2 - 1])) / 2);
  }
  else {
    return parseInt(ascRank[Math.floor(arr.length / 2)]);//下舍入
  }
};
module.exports = calculate_median;
