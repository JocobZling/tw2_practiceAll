'use strict';

function find_element_last_subscript(collection, element) {
  /*
  let result = [];
  collection.reduce((pre, ele, index) => {
    if (ele === element) {
      result.push(index);
    }
  });
  return result.pop();//删除，并返回最后一个元素的值
  */
  //includes() 方法用来判断一个数组是否包含一个指定的值，如果是，酌情返回 true或 false。
  //lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，
  // 如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始
  if (collection.includes(element))
    return collection.lastIndexOf(element);
}

module.exports = find_element_last_subscript;
