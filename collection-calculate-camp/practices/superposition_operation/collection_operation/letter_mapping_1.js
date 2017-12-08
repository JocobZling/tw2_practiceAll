'use strict';

function even_to_letter(collection) {
  let arr = collection.filter(item => item % 2 === 0);
  return arr.map(item => String.fromCharCode(item + 96));
}

module.exports = even_to_letter;
