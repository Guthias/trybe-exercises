// Removendo todos os elementos filhos de paiDoPai exceto 
// pai, elementoOndeVoceEsta e primeiroFilhoDoFilho

let allChildren = document.querySelectorAll('#paiDoPai *');

for (let element of allChildren){
  if (element.id === 'pai' || element.id === 'elementoOndeVoceEsta' || element.id === 'primeiroFilhoDoFilho'){
    continue;
  }
  element.remove();
}
