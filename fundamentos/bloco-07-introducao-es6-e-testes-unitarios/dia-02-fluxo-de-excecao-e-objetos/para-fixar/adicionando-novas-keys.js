const person = {
  name: 'Gustavo Mathias',
  bornCity: 'Belo Horizonte',
  school: 'Trybe'
}

const addKey = (object, keyName, keyValue) => object[keyName] = keyValue;

addKey(person, 'nickname', 'Guthias');

console.log(person);
