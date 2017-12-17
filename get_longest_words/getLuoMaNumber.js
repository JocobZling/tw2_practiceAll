'use strict';
const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
]);
function getLuoMaNumber(string) {
    let s = string.split("");
    let num = new Map();
    for (let i = 0; i < s.length; i++) {
        num.set(i, map.get(s[i]));
    }
    //console.log(num.keys());
    //获得最大数字的位数
    let max = num.get(0);
    for (let i = 1; i < s.length; i++) {
        if (max < num.get(i)) {
            max = num.get(i);
            //console.log(i);
        }
    }
    let weishu=0;
    for (let item of num.keys()) {
        if (num.get(item) === max) {
            weishu=item;
            //console.log(item);
        }
    }
    let aNum=max;
    for(let i=0;i<weishu;i++){
        aNum-=num.get(i);
    }
    for(let i=weishu+1;i<s.length;i++){
        aNum+=num.get(i);
    }
    //console.log(aNum);
    return aNum;
}
let a = getLuoMaNumber("IV");
console.log(a);