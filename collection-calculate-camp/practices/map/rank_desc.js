'use strict';
var rank_desc = function(collection){
  let result = collection.sort((itemA,itemB)=>itemA-itemB);
  return result;
};

module.exports = rank_desc;
