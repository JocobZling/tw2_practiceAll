'use strict';

function average_to_letter(collection) {
  let result = collection.reduce((prev, cur) => prev + cur);
  return String.fromCharCode(Math.ceil(result / collection.length) + 96);
}

module.exports = average_to_letter;

