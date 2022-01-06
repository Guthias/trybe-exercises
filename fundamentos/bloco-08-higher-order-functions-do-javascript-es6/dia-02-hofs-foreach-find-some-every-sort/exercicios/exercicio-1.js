const books = require('./template');

const authorBornIn1947 = () => books.find(book => book.author.birthYear === 1947);

console.log(authorBornIn1947());