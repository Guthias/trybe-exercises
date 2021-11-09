let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let odds = [];

for (number of numbers){
  if (number % 2 != 0) {
    odds.push(number)
  }
}

if (odds.length > 0){
  console.log(`Foi encontrado um total de ${odds.length} numeros impares`);
} else {
  console.log("Nenhum valor impar foi encontrado")
}
