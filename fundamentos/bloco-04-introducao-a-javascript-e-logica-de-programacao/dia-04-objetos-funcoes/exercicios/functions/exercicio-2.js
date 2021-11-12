function indiceMaior (numeros) {
  if (numeros.length === 0){
    return 'Seu array precisa ter pelo menos um valor';
  }

  let indiceMaior = 0;
  let valorMaior = numeros[0];

  for (let i = 0; i < numeros.length; i += 1) {
    if (valorMaior < numeros[i]){
      valorMaior = numeros[i];
      indiceMaior = i;
    }
  }

  return indiceMaior;
}

console.log(indiceMaior([2, 3, 6, 7, 10, 1]));