'use strict';

function compute_chain_median(collection) {
  let arr = collection.split("->");
  let ascRank = arr.sort((itemA, itemB) => itemA - itemB);
  if (ascRank.length % 2 === 0) {
    return (parseInt(ascRank[arr.length / 2]) + parseInt(ascRank[arr.length / 2 - 1])) / 2;
  }
  else {
   return  parseInt(ascRank[Math.floor(ascRank.length / 2)]);//上舍入
  }
}

module.exports = compute_chain_median;
