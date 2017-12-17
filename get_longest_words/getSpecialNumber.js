'use strict';
//求是否是丑数
function getSpecialNumber(n) {
    while (n != 1) {
        if (n % 2 == 0) {
            n /= 2;
        }
        if (n % 3 == 0) {
            n /= 3;
        }
        if (n % 5 == 0) {
            n /= 5;
        }
    }
    return n == 1 ? true : false;
}
let a = getSpecialNumber(12);
console.log(a);