// Transformando os IDS do HTML em variaveis
const mainContent = document.getElementById('main-content');
const backgroundSelect = document.getElementById('background-select');
const colorSelect = document.getElementById('color-select');
const sizeSelect = document.getElementById('size-select');

// Criando classes para alterar os elementos
function changeBackgroundColor(event) {
  mainContent.style.backgroundColor = event.target.value;
}

function changeFontColor(event) {
  mainContent.style.color = event.target.value;
}

function changeFontSize (event) {
  let fontSize = event.target.value;
  mainContent.style.fontSize = fontSize + 'px';
}

// Adicionando Eventos aos elementos
backgroundSelect.addEventListener('change', changeBackgroundColor);
colorSelect.addEventListener('change', changeFontColor);
sizeSelect.addEventListener('change', changeFontSize)