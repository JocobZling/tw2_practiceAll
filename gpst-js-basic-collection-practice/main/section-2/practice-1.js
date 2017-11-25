'use strict';

module.exports = function countSameElements(collection) {
    let result = [];
    let obj = collection.reduce((pre, cur) => {
        if (pre.hasOwnProperty(cur) !== true) {
            pre[cur] = 1;
        } else {
            pre[cur]++;
        }
        return pre;
    }, {});
    let {entries} = Object;
    for (let [key, value] of entries(obj)) {
        result.push({key: key, count: value})
    }
    return result;
};

