'use strict'
function maoPao(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = array.length - 1; j >= i; j--) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
let a = [2, 4, 5, 7, 8, 1, 3];
let b = maoPao(a);
console.log(b);