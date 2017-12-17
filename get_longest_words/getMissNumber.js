'use strict';
//获得一个数的位数
function getWeiShu(num) {
    let a=num.toString().split("");
    console.log(a);
    let weishu =a.length;
    return weishu;
}
//生成随机数
function Random(num) {
    let b = "";
    for (let i = 0; ; i++) {
        let num = parseInt(Math.random() * 10);
        if (b.indexOf(num) === -1) {
            b += num;
            if (b.length === 4) {
                break;
            }
        }
    }
    console.log(b);
    return b;
}