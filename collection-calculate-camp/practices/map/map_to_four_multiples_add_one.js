'use strict';
var map_to_four_multiples_add_one = function (collection) {
  let result = collection.map(item => item * 4 + 1);
  return result;
};
var collection_a = [1, 2, 3, 4, 5];
var result = map_to_four_multiples_add_one(collection_a)
console.log(result);
module.exports = map_to_four_multiples_add_one;
