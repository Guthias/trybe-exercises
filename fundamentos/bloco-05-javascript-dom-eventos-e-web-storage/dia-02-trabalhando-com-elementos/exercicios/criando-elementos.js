// Adicinando a tag h1 com o texto Exercício 5.2 - JavaScript DOM
let newElement = document.createElement('h1');
newElement.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(newElement);

// Adicione a tag main com a classe main-content
newElement = document.createElement('main');
newElement.className = 'main-content';
document.body.appendChild(newElement);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2
newElement = document.createElement('section');
newElement.className = 'center-content';
document.querySelector('.main-content').appendChild(newElement);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
newElement = document.createElement('p');
newElement.innerHTML = 'Curabitur tellus nibh, eleifend ut ornare at, hendrerit ac velit. Ut eleifend purus pharetra, scelerisque diam ac, pretium neque. Donec a arcu sed felis tempor egestas nec ac est. Integer sit amet sodales enim. Nam ultricies, lectus et tincidunt hendrerit, felis elit commodo nisl, quis molestie dolor diam in tellus. Phasellus metus sapien, eleifend vitae rhoncus id, viverra vel felis. Quisque vel luctus neque, ac volutpat augue. Praesent nibh ex, consequat lobortis ligula nec, vulputate consequat nibh';
document.querySelector('.main-content .center-content').appendChild(newElement);

// Adicionando a Tag section com a classe left-content dentro de main
newElement = document.createElement('section');
newElement.className = 'left-content';
document.querySelector('main').appendChild(newElement);

// Adicionando a Tag section com a classe right-content dentro de main
newElement = document.createElement('section');
newElement.className = 'right-content';
document.querySelector('main').appendChild(newElement);

// Adicionando uma imagem na section .left-content
newElement = document.createElement('img');
newElement.className = 'small-image';
newElement.setAttribute('src', 'https://picsum.photos/200')
document.querySelector('.left-content').appendChild(newElement);

// Adicionando numeros por extenso na .right-content
let numbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

newElement = document.createElement('ul');
newElement.id = 'lista-numeros-extenso';
document.querySelector('.right-content').appendChild(newElement);

for (let i = 0; i < numbers.length; i+= 1) {
  newElement = document.createElement('li');
  newElement.innerText = numbers[i]; 
  document.getElementById('lista-numeros-extenso').appendChild(newElement)
}

// Adionando 3 tags h3 na main
for (let i = 0; i < 3; i+= 1) {
  newElement = document.createElement('h3');
  newElement.innerText = `${i + 1}° h3`;
  document.querySelector('main').appendChild(newElement);
}
