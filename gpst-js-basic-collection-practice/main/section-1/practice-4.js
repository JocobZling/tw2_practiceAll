'use strict';

module.exports =function collectSameElements(collectionA, objectB) {
  let result=[];
  for(let itemA of collectionA){
    for(let itemB of objectB.value){
        if(itemA.key===itemB){
          result.push(itemA.key);
        }
    }
  }
  return result;
}
