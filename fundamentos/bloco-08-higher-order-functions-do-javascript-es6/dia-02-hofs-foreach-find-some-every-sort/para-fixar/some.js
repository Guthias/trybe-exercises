const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some(element => element === name);

console.log(hasName(names, 'Ana'))
