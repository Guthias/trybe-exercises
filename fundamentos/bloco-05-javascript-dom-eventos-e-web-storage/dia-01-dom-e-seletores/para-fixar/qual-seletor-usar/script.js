document.getElementById('header-container').style.background = 'rgb(76,164,109)';

document.querySelector('.emergency-tasks').style.background = 'LightSalmon';

document.querySelector('.no-emergency-tasks').style.background = 'Khaki';

let elements = document.querySelectorAll('.emergency-tasks div h3');

for (element of elements){
  element.style.background = 'DarkOrchid';
}

elements = document.querySelectorAll('.no-emergency-tasks div h3');

for (element of elements){
  element.style.background = 'black';
}

document.getElementById('footer-container').style.background = '#036B52';
