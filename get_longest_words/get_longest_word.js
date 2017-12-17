'use strict'
function getLongestword(string) {
    let a = [];
    a = string.split(" ");
    let long="";
    //console.log(a[1].length);
    for (let i = 0; i < a.length; i++) {
        for(let j=0;j<a.length;j++){
            if(a[i].length>a[j].length){
                long =a[i];
            }
        }
    }
   // console.log(long);
    return long;
}

let a = "I have a pencil";
let b = getLongestword(a);
console.log(b);