'use strict';
var is_exist_element = function (collection, element) {
  let arr = collection.filter((item, index) => index % 2 === 0);
  return arr.some(item => item === element);
};
module.exports = is_exist_element;
