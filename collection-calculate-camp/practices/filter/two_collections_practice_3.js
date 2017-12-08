'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  let result = collection_a.filter(item => {
    let flag = false;
    collection_b.forEach(ele => {
      if (item % ele === 0) {
        flag = true;
      }
    });
    return flag === true;
  });
  return result;
}

module.exports = choose_divisible_integer;
