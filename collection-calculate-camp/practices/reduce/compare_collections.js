'use strict';

function compare_collections(collection_a, collection_b) {
  if (collection_a.length !== collection_b.length) {
    return false;
  }
  return collection_a.every((item, index) => item === collection_b[index]);
}

/*
every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false
（表示可转换为布尔值 false 的值）的元素。如果发现了一个这样的元素，every 方法将会立即返回 false。
否则，callback 为每一个元素返回 true，every 就会返回 true。callback 只会为那些已经被赋值的索引调用。
不会为那些被删除或从来没被赋值的索引调用。
callback 被调用时传入三个参数：元素值，元素的索引，原数组。
 */
module.exports = compare_collections;


