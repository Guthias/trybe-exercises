const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names => names.find(name => name.length === 5);

console.log(findNameWithFiveLetters(names));