'use strict';
var single_element = function (collection) {
  let arr = collection.filter((item, index) => (index + 1) % 2 === 0);
  //计数
  let arrObj = {};
  arr.forEach(ele => {
    if (arrObj[ele.toString()]) {
      ++arrObj[ele.toString()];
    } else {
      arrObj[ele.toString()] = 1;
    }
  });
  console.log(arrObj);
  //判断输出
  let {entries} = Object;
  let result = [];
  for (let [key, value] of entries(arrObj)) {
    if (value === 1)
      result.push(parseInt(key));
  }
  return result;
};
module.exports = single_element;
