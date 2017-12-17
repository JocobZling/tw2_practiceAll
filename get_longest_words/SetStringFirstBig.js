'use strict'
function getStringFirstBig(string) {
    let a = [];
    a = string.split(" ");
    let b=[];
    for (let i = 0; i < a.length; i++) {
        b.push(a[i].substr(0,1).toUpperCase()+a[i].substr(1));
    }
    return b;
}

let a = "I have a pencil";
let b = getStringFirstBig(a);
console.log(b);
