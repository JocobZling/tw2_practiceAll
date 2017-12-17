'use strict'
function getFirst(collection,n) {
    let a=[];
    for(let i=0;i<n;i++){
        a.push(collection[i]);
    }
    return a;
}
let a=[3,4,7,8];
console.log(getFirst(a,3));