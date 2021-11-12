function biggestName (listaNomes){
  let maiorNome = listaNomes[0];

  for (let i = 0; i < listaNomes.length; i++) {
    if (maiorNome.length < listaNomes[i].length){
      maiorNome = listaNomes[i];
    }
  }
  return maiorNome;
}

console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));