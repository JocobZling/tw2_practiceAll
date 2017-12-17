'use strict';
//获得反转数
function fanzhun(string,num) {
    let a=string.split("");
    console.log(a);
    let b =[];
    for(;a.length-num<a.length;num--) {
        b.push(a[a.length - num]);
        a.splice(a.length - num, 1);
    }
    for(let i=0;i<a.length;i++){
        b.push(a[i]);
    }
    b=b.join("");
    return b;
}
let a="abcdefg";
let b=3;
let c =fanzhun(a,b);
console.log(c);
