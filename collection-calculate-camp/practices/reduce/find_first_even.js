'use strict';

function find_first_even(collection) {
  //filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
  let arr = collection.filter(item=>item%2===0);
  return arr.shift();
}

module.exports = find_first_even;

