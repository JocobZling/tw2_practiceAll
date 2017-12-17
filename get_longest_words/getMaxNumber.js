'use strict';
//返回组合最大整数
function getMax(array) {
    console.log(array[1].toString()[0]);
    let b = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = array.length - 1; j >= i; j--)
            if ((array[i].toString()[0]) > (array[j].toString()[0])) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
    }
    console.log(array);
    array.reverse();
    return array.join("");
}
let a = [1, 20, 23, 4, 8];
let b = getMax(a);
console.log(b);