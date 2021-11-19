// Código base para o exercicio

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo

// 1) Criando dias do mês
function createDaysofTheMonth(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const holiday = [24, 25, 31];
  const friday = [4, 11, 18, 25];

  let days = document.getElementById('days');
  let element;

  for (day of dezDaysList){
    element = document.createElement('li');
    element.className = 'day';
    element.innerText = day;

    if (holiday.includes(day)){
      element.classList.add('holiday');
    }

    if (friday.includes(day)){
      element.classList.add('friday');
    }

    days.appendChild(element);
  }
}

createDaysofTheMonth();

// Função para criar botões dinamicamente
function createButton (id, text){
  let buttonArea = document.querySelector('.buttons-container');
  let button = document.createElement('button');

  button.id = id;
  button.innerText = text;
  
  buttonArea.appendChild(button);
}

// 2) Criando botão feriados dinamicamente
createButton('btn-holiday', 'Feriados');

// 3) Fazendo o botão feriados mudar a cor dos dias feriado
let holidayChanged = false;

function holidayColorChange(){
  let holidays = document.querySelectorAll('.holiday');

  for (day of holidays){
    if (holidayChanged){
      day.style.color = '#777';
    } else {
      day.style.color = 'green';
    }
  }

  holidayChanged = !holidayChanged;
}

let holidayBtn = document.getElementById('btn-holiday');
holidayBtn.addEventListener('click', holidayColorChange);

// 4) Criando botão da Sexta-feira
createButton('btn-friday', 'Sexta-feira');

// 5) Mudando texto das sexta-feiras
let fridayChanged = false;

function fridayTextChange(){
  let fridays = document.querySelectorAll('.friday');
  
  for (day of fridays){
    if (fridayChanged){
      day.style.fontWeight = 'normal';
    } else {
      day.style.fontWeight = 'bold';
    }
  }

  fridayChanged = !fridayChanged;
}

let fridayBtn = document.getElementById('btn-friday');
fridayBtn.addEventListener('click', fridayTextChange);

// 6) Efeito de zoom
function addZoomEventsToDays() {
  let allDays = document.querySelectorAll('.day');

  for (day of allDays){
    day.addEventListener('mouseover', zoomIn);
    day.addEventListener('mouseout', zoomOut);
  }
}

function zoomIn (event){
  event.target.style.fontSize = '3em';
}

function zoomOut (event){
  event.target.style.fontSize = '';
}

addZoomEventsToDays();

// 7) Adicionar span tarefas

function addTask(task){
  let newTask = document.createElement('span');
  let myTasks = document.querySelector('.my-tasks');

  newTask.innerText = task;

  myTasks.appendChild(newTask)
}

addTask('Arrumar o portfolio');
