'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let result=[];
  for(let itemA of collectionA){
    for(let collection of collectionB){
      for(let itemB of collection){
        if(itemA===itemB){
          result.push(itemA);
        }
      }
    }
  }
  return result;
}
