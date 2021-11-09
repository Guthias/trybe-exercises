let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumero;

for (let i = 0; i < numbers.length; i+=1){
  if (numbers[i] < menorNumero || menorNumero == undefined) {
    menorNumero = numbers[i];
  }
}

console.log(`O menor numero é ${menorNumero}`);
