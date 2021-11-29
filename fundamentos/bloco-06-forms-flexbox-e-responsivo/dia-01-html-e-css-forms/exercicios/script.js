const statesSelect = document.getElementById('state');
const dateInput = document.getElementById('start-date');

const states = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espirito Santo','Goiás','Maranhão','Mato Grosso do Sul','Mato Grosso','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
function optionToStates() {
  let element; 
  
  for (let i = 0; i < states.length; i += 1) {
    element = document.createElement('option');
    element.innerText = states[i];
    element.value = states[i];
    statesSelect.appendChild(element);
  }
}

function validDate(event) {
  const regexRemove = /\D+/gm;
  const regexAdd = /(\d{2})(\d{2})(\d{4})/gm
  let content = event.target.value;
  content = content.replace(regexRemove, '');
  event.target.value = content.replace(regexAdd, '$1/$2/$3');
}

dateInput.addEventListener('keyup', validDate);
window.onload = () => {
  optionToStates();
}
