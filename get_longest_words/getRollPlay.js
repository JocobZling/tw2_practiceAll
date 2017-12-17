'use strict';
const max = 10;
const array = [max][max]=0;

function Copy(tox, toy, fromx, fromy, r) {
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < r; j++) {
            array[tox + i][toy + j] = array[fromx + i][fromy + j];
        }
    }
}

function Table(k) {
    let i, r;
    let n = 1 << k;
    for (let i = 0; i < n; i++) {
        console.log(array);
        array[0][i] = i + 1;
        for (r = 1; i < n; r <<= 1) {

            for (i = 0; i < n; i += 2 * r) {
                Copy(r, r + 1, 0, i, r);
                Copy(r, i, 0, r + i, r);
            }
        }
    }
}

Table(6);
console.log(array);