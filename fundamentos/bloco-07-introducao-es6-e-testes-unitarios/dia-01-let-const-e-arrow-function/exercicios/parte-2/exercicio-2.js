const longestWord = phrase => phrase.split(' ').sort((a, b) => b.length - a.length)[0];

console.log(longestWord('O importante não é vencer todos os dias, mas lutar sempre.')) // importante
console.log(longestWord('O medo de perder tira a vontade de ganhar.')) // vontade
console.log(longestWord('A única forma de vencer uma discussão é evitá-la.')) // discussão
console.log(longestWord('Querer vencer significa já ter percorrido metade do caminho.')) // percorrido
