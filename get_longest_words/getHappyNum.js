'use strict';
//一个不是快乐数的数字在进行每个位置上的数字平方和计算时会得到4这个值。
//那些最终结果不是1的数字，最终都会以4结束。一旦一个数字沾上了“4”，等待它的就是无尽的循环。
function isHappy(n) {
    let sum = n;
    while (true) {
        sum = numSum(sum);
        if (sum === 4) {
            break;
        }
        if (sum === 1) {
            return true;
        }
    }
    return false;
}
function numSum(n) {
    let sum = 0;
    let x;
    while (n !== 0) {
        x = n % 10;
        n = parseInt(n / 10);
        sum += x * x;
    }
    return sum;
}
let a = isHappy(19);
console.log(a);