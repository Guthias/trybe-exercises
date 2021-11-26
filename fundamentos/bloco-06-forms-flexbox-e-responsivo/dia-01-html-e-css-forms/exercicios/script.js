const states = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espirito Santo','Goiás','Maranhão','Mato Grosso do Sul','Mato Grosso','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
const statesSelect = document.getElementById('state');

function optionToStates() {
  let element; 
  
  for (let i = 0; i < states.length; i += 1) {
    element = document.createElement('option');
    element.innerText = states[i];
    element.value = states[i];
    statesSelect.appendChild(element);
  }
}

window.onload = () => {
  optionToStates();
}
