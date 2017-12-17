'use strict'
function getCharTimes(str, char) {
    let a = str.split("");
    let n = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == char) {
            n++;
        }
    }
    return n;
}
let str = "abcaaaaaa";
let b = getCharTimes(str, 'a');
console.log(b);