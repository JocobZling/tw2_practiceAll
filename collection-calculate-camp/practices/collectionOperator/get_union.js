'use strict';

function get_union(collection_a, collection_b) {
  let result = collection_a;
  collection_b.forEach(item => {
    if (!collection_a.includes(item)) {
      result.push(item);
    }
  })
  return result;
}

module.exports = get_union;

