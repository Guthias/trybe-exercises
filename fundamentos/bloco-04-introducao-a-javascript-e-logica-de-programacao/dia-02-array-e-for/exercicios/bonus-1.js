let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let count = 1; count < numbers.length; count+=1){
  for (let index = 0; index < count; index+=1){
    if (numbers[count] < numbers[index]){
      let numero = numbers[count];
      numbers[count] = numbers[index];
      numbers[index] = numero;
    }
  }
}

console.log(numbers)
