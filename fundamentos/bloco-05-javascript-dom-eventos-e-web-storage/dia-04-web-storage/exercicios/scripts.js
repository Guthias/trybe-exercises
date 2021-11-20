let mainContent = document.getElementById('main-content')

function changeBackgroundColor(event) {
  mainContent.style.backgroundColor = event.target.value;
}

let backgroundSelect = document.getElementById('background-select')

backgroundSelect.addEventListener('change', changeBackgroundColor);
