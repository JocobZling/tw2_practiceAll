'use strict'
function getRangeBetween(a,b) {
    let m=[];
    for(let i =a;i<b+1;i++){
        m.push(i);
    }
    return m;
}
let a= getRangeBetween(1,4);
console.log(a);