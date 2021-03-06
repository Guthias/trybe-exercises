const form = document.getElementById('form');
const statesSelect = document.getElementById('state');
const dateInput = document.getElementById('start-date');
const curriculumArea = document.getElementById('curriculum');

const states = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espirito Santo','Goiás','Maranhão','Mato Grosso do Sul','Mato Grosso','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

const dataForElements = [
  { 
    category: 'personal',
    type: 'text',
    id: 'name',
    labelContent: "Nome",
    maxLength: 40,
    required: true
  }, { 
    category: 'personal',
    type: 'text',
    id: 'email',
    labelContent: "Email",
    maxLength: 50,
    required: true
  }, { 
    category: 'personal',
    type: 'text',
    id: 'cpf',
    labelContent: "CPF",
    maxLength: 11,
    required: true
  }, { 
    category: 'personal',
    type: 'text',
    id: 'city',
    labelContent: "Cidade",
    maxLength: 28,
    required: true
  }, { 
    category: 'personal',
    type: 'select',
    id: 'state',
    labelContent: "Estado",
    options: states,
    required: true
  }, { 
    category: 'personal',
    type: 'radio',
    id: 'residence',
    labelContent: "Moradia",
    options: ['casa', 'apartamento'],
    required: true
  }, { 
    category: 'professional',
    type: 'textarea',
    id: 'summary',
    labelContent: "Resumo do curriculo",
    maxLength: 1000,
    required: true
  }, { 
    category: 'professional',
    type: 'text',
    id: 'role',
    labelContent: "Cargo",
    maxLength: 40,
    required: true
  }, { 
    category: 'professional',
    type: 'textarea',
    id: 'role-summary',
    labelContent: "Resumo do Cargo",
    maxLength: 500,
    required: true
  }, {
    category: 'professional',
    type: 'date',
    id: 'start-date',
    labelContent: 'Data de Inicio',
    maxLength: 8,
    required: true
  }
]

function renderInputText(objectArray, date = false) {
  const input = document.createElement('input');
  input.id = objectArray.id;
  input.type = 'text';
  input.className = 'form-control';
  if (objectArray.required) {
    input.required = true
  }
  input.maxLength = objectArray.maxLength;

  if (date) {
    input.id = 'datepicker';
  }
  return input;
}

function renderInputRadio(objectArray) {
  const element = document.createElement('div');
  let input;
  let label;

  for (let i = 0; i < objectArray.options.length; i += 1) {
    label = document.createElement('label');
    input = document.createElement('input');
    label.className = 'd-block form-check-label';
    input.name = objectArray.id;
    input.value = objectArray.options[i];

    input.type = 'radio';
    input.className = 'form-check-input';
    
    label.appendChild(input);
    label.innerHTML += objectArray.options[i];
    element.appendChild(label);
  }

  return element;
}

function renderSelect(objectArray) {
  const select = document.createElement('select');
  let option;
  select.id = objectArray.id;
  select.className = 'form-select'

  for (let i = 0; i < objectArray.options.length; i += 1) {
    option = document.createElement('option');
    option.innerText = states[i];
    option.value = states[i];
    select.appendChild(option);
  }

  return select
}

function renderTextArea(objectArray) {
  const textArea = document.createElement('textarea');
  textArea.id = objectArray.id;
  textArea.className = 'form-control';
  if (objectArray.required) {
    textArea.required = true
  }
  textArea.maxLength = objectArray.maxLength;
  return textArea;
}

function createRow(fieldset, objectArray) {
  const element = document.createElement('div');
  const label = document.createElement('label');
  let input;
  element.className = 'mb-3';

  label.innerText = objectArray.labelContent;
  label.className = 'form-label'
  element.appendChild(label);

  switch (objectArray.type) {
    case 'text': input = renderInputText(objectArray); break;
    case 'select': input = renderSelect(objectArray); break;
    case 'radio': input = renderInputRadio(objectArray); break;
    case 'textarea': input = renderTextArea(objectArray); break;
    case 'date': input = renderInputText(objectArray, true); break;
    default: console.log(`Erro: Não é possivel criar objeto do tipo ${objectArray.type}`)
  }

  element.appendChild(input);
  fieldset.appendChild(element);
}

function createFieldSet(objectData) {
  const fieldset = document.createElement('fieldset');
  for(let i = 0; i < objectData.length; i += 1) {
    createRow(fieldset, objectData[i]);
  }
  form.appendChild(fieldset);
}

function renderCurriculumRow(rowData) {
  const row = document.createElement('div');
  let input;

  validateElement(rowData);
  if (rowData.type === 'radio') {
    input = document.querySelector(`input[name=${rowData.id}]:checked`).value;
  } else {
    input = document.getElementById(rowData.id).value;
  }

  row.innerText = `${rowData.labelContent}: ${input}`;
  curriculumArea.appendChild(row);
}

function haveContent(elementData) {
  let element;
  
  if (elementData.type === 'radio') {
    element = document.querySelectorAll(`input[name=${elementData.id}]:checked`);
    if (element) {
      return true;
    }
    return false;
  }

  element = document.getElementById(elementData.id);

  if(element.value === ''){
    return false;
  }
  return true;
}

function validateElement(elementData) {
  let valid = true;
  if (elementData.hasOwnProperty('required')){
    if (elementData.required === true) {
      valid = haveContent(elementData); 
    }
  }
  return valid;
}

function allValid(elementsData) {
  let valid = true;
  for(let i = 0; i < elementsData.length; i += 1) {
    valid = validateElement(elementsData[i])

    if(!valid){
      return false;
    }
  }
  return true;
}

function ckeckDate() {
  let allDates;

  for(let i = 0; i < dataForElements.length; i += 1) {
    allDates = dataForElements.filter((elementData) => {
      return elementData.type === 'date';
    });
  }

  for(let i = 0; i < allDates.length; i += 1) {
    const element = document.getElementById(allDates[i].id);

    if(invalidDate(formatDate(element.value))) {
      return false;
    }
  }
  return true
}

function generateCurriculum (event) {
  event.preventDefault();
  
  if(allValid(dataForElements)) {
    for (let i = 0; i < personalData.length; i += 1) {
      renderCurriculumRow(dataForElements[i]);
    };
  } else {
    if(!ckeckDate()) {
      curriculumArea.innerHTML = 'A data que vocẽ inseriu é invalida';
      return;
    }
    curriculumArea.innerHTML = 'Preencha todos os dados antes de prosseguir';
  } 
}

function generateForm(categories) {
  let sameCategoryElements
  for(let i = 0; i < categories.length; i += 1) {
    sameCategoryElements = dataForElements.filter((elementData) => {
      return elementData.category === categories[i];
    });
    createFieldSet(sameCategoryElements);
  }
}

function createForms() {
  generateForm(['personal', 'professional']);

  const element = document.createElement('button');
  element.id = 'generate-cv';
  element.innerText = 'Enviar';
  element.className = 'd-block col-8 mx-auto btn btn-primary btn-lg';

  form.appendChild(element);
  element.addEventListener('click', generateCurriculum);
}

window.onload = () => {
  createForms();
  document.getElementById('datepicker').DatePickerX.init( {
    format: 'dd/mm/yyyy',
    weekDayLabels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    shortMonthLabels: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    titleFormatDay: 'd MM, yyyy',
    todayButton: false,
    mondayFirst: false,
    clearButton: false
  });
}
