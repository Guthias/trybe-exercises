// Transformando os IDS do HTML em variaveis
const mainContent = document.getElementById('main-content');
const backgroundSelect = document.getElementById('background-select');
const colorSelect = document.getElementById('color-select');
const sizeSelect = document.getElementById('size-select');
const lineHeightSelect = document.getElementById('line-height-select')
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

function changeLineHeight (event) {
  let lineHeight = event.target.value;
  mainContent.style.lineHeight = lineHeight + 'em';
}

// Adicionando Eventos aos elementos
backgroundSelect.addEventListener('change', changeBackgroundColor);
colorSelect.addEventListener('change', changeFontColor);
sizeSelect.addEventListener('change', changeFontSize);
lineHeightSelect.addEventListener('change', changeLineHeight)