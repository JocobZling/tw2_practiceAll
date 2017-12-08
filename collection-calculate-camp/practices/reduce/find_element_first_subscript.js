'use strict';

function find_element_first_subscript(collection, element) {
/*  let result = [];
  collection.reduce((pre, ele, index) => {
    if (ele === element) {
      result.push(index);
    }
  });
  return result.shift();//删除，并返回第一个元素的值*/
  return collection[element];
}

module.exports = find_element_first_subscript;

