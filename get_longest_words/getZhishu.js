'use strict'
function zhishu() {
    let a = [];
    for (let i = 2; i < 100; i++) {
        for (let j = 2; j <= i; j++) {
            if (i % j == 0 && i != j) {
                break;
            }
            // 输出所有在 i=j 且 i%j=0的数
            if (i % j == 0 && i == j) {
                a.push(i);
            }
        }
    }
    return a;
}
let a= zhishu();
console.log(a);