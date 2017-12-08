'use strict';

function collect_max_number(collection) {
  return Math.max(...collection);
}

//扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列
//该运算符将一个数组，变为参数序列
module.exports = collect_max_number;
