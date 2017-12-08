'use strict';
var rank_asc = function (collection) {
  let result = collection.sort((itemA,itemB)=>itemB-itemA);
  return result;
};

module.exports = rank_asc;
