// Colocando classe no h1
let element = document.getElementsByTagName('h1')[0];
element.className = 'title';

// Adicionando classe h3 nas 3 h3 criadas
let elements = document.getElementsByTagName('h3');
for (let item of elements){
  item.className = 'description'
}
