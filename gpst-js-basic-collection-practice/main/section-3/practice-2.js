'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let collectionB = [];
    collectionB = objectB.value;
    for (let itemA of collectionA) {
        for (let itemB of collectionB)
            if (itemA.key === itemB) {
                itemA.count = itemA.count - parseInt((itemA.count) / 3);
            }
    }
    return collectionA;
}
