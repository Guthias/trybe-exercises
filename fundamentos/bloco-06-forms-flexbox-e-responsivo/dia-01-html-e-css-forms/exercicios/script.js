const statesSelect = document.getElementById('state');
const dateInput = document.getElementById('start-date');
const createButton = document.getElementById('generate-cv');
const curriculumArea = document.getElementById('curriculum');
const states = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espirito Santo','Goiás','Maranhão','Mato Grosso do Sul','Mato Grosso','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

const personalData = [
  { 
    type: 'text',
    id: 'name',
    labelContent: "Nome",
    maxlength: 40,
    required: true
  }, { 
    type: 'text',
    id: 'email',
    labelContent: "Email",
    maxlength: 50,
    required: true
  }, { 
    type: 'text',
    id: 'city',
    labelContent: "Cidade",
    maxlength: 28,
    required: true
  }, { 
    type: 'radio',
    id: 'residence',
    labelContent: "Moradia",
    options: ['casa', 'apartamento'],
    required: true
  }
]

const professionalData = [
  { 
    type: 'textarea',
    id: 'summary',
    labelContent: "Resumo do curriculo",
    maxlength: 1000,
    required: true
  }, { 
    type: 'text',
    id: 'name',
    labelContent: "Cargo",
    maxlength: 40,
    required: true
  }, { 
    type: 'textarea',
    id: 'name',
    labelContent: "Cargo",
    maxlength: 40,
    required: true
  }, {
    type: 'date',
    id: 'start-date',
    required: true
  }
];

function optionToStates() {
  let element; 
  
  for (let i = 0; i < states.length; i += 1) {
    element = document.createElement('option');
    element.innerText = states[i];
    element.value = states[i];
    statesSelect.appendChild(element);
  }
}

function validDate(date) {
  const day = parseInt(date.slice(0, 2));
  const month = parseInt(date.slice(2, 4));

  if (!(day > 0 && day <= 31 && month > 0 && month <= 12)) {
    alert('A data que você inseriu é invalida'); 
  }
}

function formatDate(event) {
  const regexRemove = /\D+/gm;
  const regexAdd = /(\d{2})(\d{2})(\d{4})/gm
  let content = event.target.value;
  content = content.replace(regexRemove, '');
  content = content.replace(regexAdd, '$1/$2/$3');
  event.target.value = content;
  
  if (content.length === 10) {
    validDate(content);
  }
}

dateInput.addEventListener('keyup', formatDate);
window.onload = () => {
  optionToStates();
}
