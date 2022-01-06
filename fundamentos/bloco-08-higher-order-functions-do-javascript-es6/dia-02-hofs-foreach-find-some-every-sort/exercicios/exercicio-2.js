const books = require('./template');

function smallerName() {
  const nameBook = books.sort((a, b) => a.name.length - b.name.length)[0]
  return nameBook;
}

console.log(smallerName());