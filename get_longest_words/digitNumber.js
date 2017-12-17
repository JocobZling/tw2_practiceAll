'use strict';
function digitNumber(a) {
   // let a= num.toString().split("");
    let sum=0;
    for(let i=0;i<a.length;i++){
        sum+=parseInt(a[i]);
    }
    isture(sum);
}
function isture(num) {
    let a=num.toString().split("");
    if(a.length>1){
        digitNumber(a);
    }else{
        console.log(num);
        return;
    }
}

isture(11);