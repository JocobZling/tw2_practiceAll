'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let obj = {};
    let collectionANew = [];
    for (let i = 0; i < collectionA.length;) {
        let count = 0;
        for (let j = i; j < collectionA.length; j++) {
            let c = collectionA[i].split("-");
            if (collectionA[i] === collectionA[j]) {
                if (c.length === 2) {
                    obj = {key: c[0], count: parseInt(c[1])};
                }
                else {
                    obj = {key: collectionA[i], count: count + 1};
                }
                count++;
            }
        }
        collectionANew.push(obj);
        i += count;
    }
    let collectionB = [];
    collectionB = objectB.value;
    for (let itemA of collectionANew) {
        for (let itemB of collectionB)
            if (itemA.key === itemB) {
                itemA.count = itemA.count - parseInt((itemA.count) / 3);
            }
    }
    return collectionANew;
}
