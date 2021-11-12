function indiceMenor (numeros) {
  if (numeros.length === 0){
    return 'Seu array precisa ter pelo menos um valor';
  }

  let indiceMenor = 0;
  let valorMenor = numeros[0];

  for (let i = 0; i < numeros.length; i += 1) {
    if (valorMenor > numeros[i]){
      valorMenor = numeros[i];
      indiceMenor = i;
    }  }

  return indiceMenor;
}

console.log(indiceMenor([2, 3, 6, 7, 10, 1]));