// Transformando os IDS do HTML em variaveis
const mainContent = document.getElementById('main-content');
const backgroundSelect = document.getElementById('background-select');
const colorSelect = document.getElementById('color-select');
const sizeSelect = document.getElementById('size-select');
const lineHeightSelect = document.getElementById('line-height-select');
const fontFamilySelect = document.getElementById('font-family-select');

// Criando classes para alterar os elementos
function changeStyleProperty (property, value) {
  mainContent.style[property] = value;
}

// Adicionando Eventos aos elementos
backgroundSelect.addEventListener('change', (event) => changeStyleProperty('backgroundColor', event.target.value));
colorSelect.addEventListener('change', (event) => changeStyleProperty('color', event.target.value));
sizeSelect.addEventListener('change', (event) => changeStyleProperty('fontSize', event.target.value));
lineHeightSelect.addEventListener('change', (event) => changeStyleProperty('lineHeight', event.target.value))
fontFamilySelect.addEventListener('change', (event) => changeStyleProperty('fontFamily', event.target.value))