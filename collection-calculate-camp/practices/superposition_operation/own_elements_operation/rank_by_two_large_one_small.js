'use strict';

function rank_by_two_large_one_small(collection) {
  let arr = collection.sort((a, b) => a - b);
  //第一位和第三位交换
  for (let i = 0; i < arr.length - (arr.length % 3); i += 3) {
    [arr[i], arr[i + 1], arr[i + 2]] = [arr[i + 1], arr[i + 2], arr[i]];
  }
  return arr;
}
module.exports = rank_by_two_large_one_small;
