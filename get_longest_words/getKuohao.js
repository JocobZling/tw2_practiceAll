'use strict';
function getKuohao(str) {
    let s = str.split("");
    let left = "{[(";
    let right = "}])";
    let result = [];
    let flag = true;
    //保证出栈入栈同时进行
    //分别放在两个for里面会无法保证顺序
    for (let item of s) {
        if (left.indexOf(item) > -1) {
            result.push(item);
        }
        if (right.indexOf(item) > -1) {
            if (right.indexOf(item) !== left.indexOf(result.pop())) {
                flag = false;
                break;
            }
        }
    }
    if (result.length !== 0) {
        flag = false;
    }
    return flag;
}
let a = "[]{}";
let b = getKuohao(a);
console.log(b);