'use strict';

function hybrid_operation_to_uneven(collection) {
  let arr = collection.filter(item => item % 2 !== 0);
  let result = arr.map(item => item * 3 + 2);
  return result;
}

module.exports = hybrid_operation_to_uneven;

