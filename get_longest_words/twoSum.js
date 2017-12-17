'use strict';
function twoSum(a,tatget) {
    let targetArray=[];
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a.length;j++)
        if(a[i]+a[j]===tatget){
            targetArray.push(i+1,j+1);
            return targetArray;
        }
    }
    return false;

}
let a=[2,7,11,15];
let targetArray=twoSum(a,9);
console.log(targetArray);