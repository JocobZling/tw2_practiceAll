'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let result=[];
  let collectionB=[];
  collectionB=objectB.value;
    for(let itemA of collectionA){
        for(let itemB of collectionB){
            if(itemA===itemB){
                result.push(itemA);
            }
        }
    }
    return result;
}
