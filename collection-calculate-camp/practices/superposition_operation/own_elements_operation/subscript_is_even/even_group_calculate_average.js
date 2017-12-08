'use strict';
var even_group_calculate_average = function (collection) {
  let Arr = collection.filter((item, index) => (index + 1) % 2 === 0 && item % 2 === 0);
  let oneArr = Arr.filter(item => item.toString().length === 1);
  let tenArr = Arr.filter(item => item.toString().length === 2);
  let hundredArr = Arr.filter(item => item.toString().length === 3);
  let oneSum = oneArr.reduce((pre, cur) => pre + cur, 0);
  let tenSum = tenArr.reduce((pre, cur) => pre + cur, 0);
  let hundredSum = hundredArr.reduce((pre, cur) => pre + cur, 0);
  if (oneArr && oneSum > 0 && tenArr && tenSum > 0 && hundredArr && hundredSum > 0) {
    return [oneSum / oneArr.length, tenSum / tenArr.length, hundredSum / hundredArr.length];
  }
  if (hundredSum > 0 && oneSum === 0 && tenSum === 0) {
    return [hundredSum / hundredArr.length];
  } else {
    return [0];
  }
};
module.exports = even_group_calculate_average;
