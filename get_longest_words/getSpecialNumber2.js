'use strict';
//求第n个丑数
function getSpecialNumber(num1) {
    let ugly = [];
    ugly[0] = 1;
    let i2 = 0, i3 = 0, i5 = 0;
    for (let i = 1; i < num1; i++) {
        let next2 = ugly[i2] * 2, next3 = ugly[i3] * 3, next5 = ugly[i5] * 5;
        let min = Math.min(next2, Math.min(next3, next5));
        ugly[i] = min;
        console.log(ugly);
        if (min === next2) {
            i2++;
        }
        if (min === next3) {
            i3++;
        }
        if (min === next5) {
            i5++;
        }
    }

    return ugly[num1 - 1];
}
let a = getSpecialNumber(10);
console.log(a);