'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  let result=[];
  collection_a.forEach(ele=>{
    if(collection_b.indexOf(ele)===-1){
      result.push(ele);
    }
  });
  return result;
}

module.exports = choose_no_common_elements;
