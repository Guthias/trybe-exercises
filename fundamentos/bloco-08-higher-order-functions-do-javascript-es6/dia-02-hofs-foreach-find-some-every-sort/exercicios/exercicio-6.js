const books = require('./template');

const someBookWasReleaseOnThe80s = () => books.some(book => book.releaseYear > 1979 && book.releaseYear < 1990); 

console.log(someBookWasReleaseOnThe80s());