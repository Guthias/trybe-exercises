const books = require('./template');

const everyoneWasBornOnSecXX = () => books.every(book => book.author.birthYear > 1900 && book.author.birthYear < 2001);

console.log(everyoneWasBornOnSecXX());