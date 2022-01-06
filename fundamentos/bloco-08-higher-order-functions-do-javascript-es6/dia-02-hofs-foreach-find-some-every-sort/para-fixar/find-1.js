const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = numbers => numbers.find(n => n % 3 === 0 && n % 5 === 0);

console.log(findDivisibleBy3And5(numbers))