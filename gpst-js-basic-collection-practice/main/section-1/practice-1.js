'use strict';
module.exports = function collectSameElements(collectionA, collectionB) {
  let result=[];
  for(let itemA of collectionA){
      console.log(itemA);
    for(let itemB of collectionB){
      if(Object.is(itemA,itemB)){
        result.push(itemA);
      }
    }
  }
  return result;
}