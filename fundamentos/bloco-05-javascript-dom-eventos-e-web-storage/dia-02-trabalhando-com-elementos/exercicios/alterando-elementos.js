// Colocando classe no h1
let element = document.getElementsByTagName('h1')[0];
element.className = 'title';

// Adicionando classe h3 nas 3 h3 criadas
let elements = document.getElementsByTagName('h3');
for (let item of elements){
  item.className = 'description'
}

// Removendo a section left-content;
element = document.querySelector('.left-content');
document.querySelector('.main-content').removeChild(element);

// centralizando a section right-content
element = document.querySelector('.right-content');
element.style.marginRight = 'auto';

// Alterando a cor do elemento center-content
element = document.querySelector('.center-content');
element.style.backgroundColor = 'green';

// Removendo ultimos numeros da lista
element = document.querySelector('#lista-numeros-extenso')
element.removeChild(element.lastElementChild);
element.removeChild(element.lastElementChild);