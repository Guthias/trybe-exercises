const books = require('./template');

function authorUnique() {
  return books.every(book => 
    !books.some(bookSome => 
      bookSome.author.birthYear === book.author.birthYear 
      && bookSome.author.name !== book.author.name
    )
  )
}

console.log(authorUnique())