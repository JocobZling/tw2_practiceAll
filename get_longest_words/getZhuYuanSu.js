'use strict'
function seq(a, b) {
    if (a > b) {
        return 1;
    }
    else if (a < b) {
        return -1;
    }
    else {
        return 0;
    }

}
function getZhuYuanSu(collection) {
    let a = [];
    //找种类
    for (let i = 0; i < collection.length; i++) {
        for (let j = i + 1; j < collection.length; j++) {
            if (collection[i] === collection[j]) {
                j = ++i;
            }
        }
        a.push(collection[i]);
    }
    a.sort(seq);//数字排序要引入方法
    //计数
    let b = [];
    for (let i = 0; i < a.length; i++) {
        let count = 0;
        for (let j = 0; j < collection.length; j++) {
            if (a[i] == collection[j]) {
                count++;
            }
        }
        b.push({'key': a[i], 'count': count});
    }
    console.log(b);
    let c=[];
    for(let i=0;i<b.length;i++){
        if(b[i].count>parseInt(collection.length/2)){
            c.push(b[i].key);
        }
    }
    return c;
}
let i=[1,1,1,1,1,1,1,1,1,3,6,1,1];
let a=getZhuYuanSu(i);
console.log(a);