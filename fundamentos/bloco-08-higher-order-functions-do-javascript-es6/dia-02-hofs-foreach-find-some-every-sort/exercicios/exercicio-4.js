const books = require('./template');

const booksOrderedByReleaseYearDesc = () => books.sort((a, b) => b.releaseYear - a.releaseYear);

console.log(booksOrderedByReleaseYearDesc())