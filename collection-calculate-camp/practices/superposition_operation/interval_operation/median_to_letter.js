'use strict';

function median_to_letter(collection) {
  let ascRank = collection.sort((itemA, itemB) => itemA - itemB);
  let middle;
  let result = "";
  if (ascRank.length % 2 === 0) {
    middle = Math.ceil((parseInt(ascRank[collection.length / 2]) + parseInt(ascRank[collection.length / 2 - 1])) / 2);
  }
  else {
    middle = parseInt(ascRank[Math.floor(ascRank.length / 2)]);
  }
  result += String.fromCharCode(middle / 26 + 96);
  result += String.fromCharCode(middle % 26 + 96);
  return result;
}

module.exports = median_to_letter;
