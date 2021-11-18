let element = elementoOndeVoceEsta;

// Criando um irmão para elementoOndeVoceEsta
let newElement = document.createElement('div');
newElement.innerText = 'Oi, eu sou a div irmão do elementoOndeVoceEsta criada em JS';
element.parentElement.appendChild(newElement);

// Criamdo um filho para elementoOndeVoceEsta .
newElement = document.createElement('p');
newElement.innerText = 'Eu sou um pargrafo filho do elemento elementoOndeVoceEsta criado em JS';
element.appendChild(newElement);

// Criamdo um filho para primeiroFilhoDoFilho .
newElement = document.createElement('span');
newElement.innerText = 'Eu sou uma span dentro do primeiroFilhoDoFilho'
element.firstElementChild.appendChild(newElement);

// A partir desse filho criado, acesse terceiroFilho .
elementChildren = document.querySelector('#primeiroFilhoDoFilho span');
console.log(elementChildren.parentElement.parentElement.nextSibling.nextSibling);