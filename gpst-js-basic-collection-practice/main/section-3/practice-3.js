'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let obj = {};
    let collectionANew = [];
    for (let i = 0; i < collectionA.length;) {
        let count = 0;
        for (let j = i; j < collectionA.length; j++) {
            if (collectionA[i] === collectionA[j]) {
                count++;
            }
        }
        obj = {key: collectionA[i], count: count};
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
