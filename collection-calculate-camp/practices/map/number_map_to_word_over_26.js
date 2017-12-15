'use strict';
var number_map_to_word_over_26 = function (collection) {
  let result = collection.map(item => {
    let ele = [];
    ele.push(String.fromCharCode(item / 26 + 96));
    ele.push(String.fromCharCode(item % 26 + 96));
   if (ele.includes("`"))//去空
      ele.splice(0, 1);
    return ele.join("");//split()
  });
  return result;
};
var collection_a = [1, 13, 27, 30, 25, 27];
var result = number_map_to_word_over_26(collection_a);
console.log(result);
module.exports = number_map_to_word_over_26;
