'use strict';
var even_asc_odd_desc = function (collection) {
  let evenArr = collection.filter(item => item % 2 === 0);
  let oddArr = collection.filter(item => item % 2 !== 0);
  return evenArr.sort((a, b) => a - b).concat(oddArr.sort((a, b) => b - a));
};
module.exports = even_asc_odd_desc;
