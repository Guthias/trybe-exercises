let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersTriplo = [];

for (let index = 0; index < numbers.length; index+=1){
  if(index == numbers.length - 1){
    numbersTriplo.push(numbers[index] * 2);

  } else {
    numbersTriplo.push(numbers[index] * numbers[index + 1]);
  }
}

console.log(numbersTriplo)