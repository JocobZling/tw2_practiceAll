'use strict';

function compute_median(collection) {
  let ascRank = collection.sort((itemA, itemB) => itemA - itemB);
  if (ascRank.length % 2 === 0) {
    return (parseInt(ascRank[collection.length / 2]) + parseInt(ascRank[collection.length / 2 - 1])) / 2;
  }
  else {
    return parseInt(ascRank[Math.floor(ascRank.length / 2)]);//下舍入
  }
}

module.exports = compute_median;


