'use strict';
function getWordsCount(s1,s2) {
    let a=s1.split(" ");
    let b=s2.split(" ");
    let result=[];
    let count=1;
    for(let item1 of a){
        result.push({
            words:item1,
            count:count
        })
    }
    //console.log(result);
    for(let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++){
            if(a[i]===b[i]){
                result.push({
                    words:a[i],
                    count:count+1
                })
            }
        }
    }
    console.log(result);
    return;
}
let s1="Google Bye GoodBye Hadoop code";
let s2="lintcode code Bye";
let result=getWordsCount(s1,s2);
console.log(result);