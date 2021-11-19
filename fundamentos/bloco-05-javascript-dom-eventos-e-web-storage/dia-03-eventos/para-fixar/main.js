const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

firstLi.classList.remove('tech');

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

let allLi = document.querySelectorAll('.container li');

for (let element of allLi){
  element.addEventListener('click', addTech);
}

function addTech(event) {
  let techElements = document.querySelectorAll('.tech');
  for (let element of techElements){
    element.classList.remove('tech')
  }
  event.target.classList.add('tech');
}
// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('focusout', changeTech)
function changeTech (){
  let element = document.querySelector('.tech');
  let inputValue = document.getElementById('input').value;
  element.innerText = inputValue;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
let mySpotrybefy = document.getElementById('my-spotrybefy');
mySpotrybefy.addEventListener('dblclick', portfolioRedirect);

function portfolioRedirect(){
  window.open('https://guthias.github.io/', '_blank');
}
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

mySpotrybefy.addEventListener('mouseover', changeColor);
mySpotrybefy.addEventListener('mouseout', changeColor);

let colorChanged = false;
function changeColor(event){
  if (!colorChanged){
    event.target.style.color = 'orange';
  } else {
    event.target.style.color = '';
  }
  colorChanged = !colorChanged;
}
// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.