'use strict';
function getHuiWenShu(num) {
    let a=num.toString().split("");
    let c=num.toString().split("");
    let length=c.length;
    let b=Math.round(a.length/2);
    console.log(Math.round(a.length/2));
    if(a.length%2===0){
        for(let i=0;i<b;i++){
            if(a[i]!==a[length-1-i]){
                return false;
            }
        }
    }else{
        a.splice(b-1,1);
        console.log(a);
        for(let i=0;i<b-1;i++){
            if(a[i]!==a[length-1-i]){
                return false;
            }
        }
    }
    return true;
}
let a=getHuiWenShu(1221);
console.log(a);