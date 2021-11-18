element = document.getElementById('elementoOndeVoceEsta');

// Selecionando o elemento pai e alterando a cor
element.parentElement.style.backgroundColor = 'red';

// Selecionando o  primeiroFilhoDoFilho e adicionando um texto para ele
element.firstElementChild.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem explicabo molestiae dignissimos, dolor, quidem inventore perspiciatis vero quod non itaque fugiat eos consequatur provident repellat debitis ratione, consectetur nihil deserunt!';

// Acessando o primeiroFilho a partir do pai
console.log(pai.children[0]);

// Acessando o primeiroFilho a partir de elementoOndeVoceEsta 
console.log(element.previousElementSibling);

// Acessando o texto Atenção! a partir de elementoOndeVoceEsta
console.log(element.nextSibling);

// Acessando o terceiroFilho a partir de elementoOndeVoceEsta
console.log(element.nextElementSibling);

// Acessando o terceiroFilho a partir de pai
console.log(pai.children[2]);