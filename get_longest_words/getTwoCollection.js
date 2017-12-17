'use strict';
function seq(a, b) {
    if (a > b) {
        return 1;
    }
    else if (a < b) {
        return -1;
    }
    else {
        return 0;
    }
}
function double_to_one(collection) {
    let a = collection.join(",");
    let b = a.split(",");
    let c = [];
    for (let i = 0; i < b.length; i++) {
        c.push(parseInt(b[i]));
    }
    //console.log(c);
    let d = [];
    //去重
    for (let i = 0; i < c.length; i++) {
        for (let j = i + 1; j < c.length; j++) {
            if (c[i] === c[j]) {
                j = ++i;
            }
        }
        d.push(c[i]);
    }
    d.sort(seq);
    return d;
}
var collection = [[1, 2, 3], [100, 2, 1, 10]];
var result = double_to_one(collection);
console.log(result);
