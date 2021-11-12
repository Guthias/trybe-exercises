function maisRepete (numeros) {
  numeros = numeros.sort();
  let numeroAtual;
  let maisRepete = ['', 0];
  let count = 0;

  for (let i = 0; i < numeros.length; i++) {
    numeroAtual = numeros[i]
    if (numeros[i - 1] !== numeroAtual){
      count = 0;
    }

    count += 1;
    
    if (count > maisRepete[1]){
      maisRepete = [numeroAtual, count]; 
    }
  }

  return maisRepete[0]
}

console.log(maisRepete([2, 3, 2, 5, 8, 2, 3, 8, 5, 7, 5, 8, 4, 3, 3]));