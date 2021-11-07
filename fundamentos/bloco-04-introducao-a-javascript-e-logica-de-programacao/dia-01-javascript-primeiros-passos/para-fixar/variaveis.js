const myName = "Gustavo Mathias";
const birthCity = "Belo Horizonte";
let birthYear = 2003;

console.log("Meu nome -> ", myName);
console.log("Cidade Natal -> ", birthCity);
console.log("Ano que eu nasci -> ", birthYear);

birthYear = 2030;

console.log("\n---------- Alterando Ano que eu nasci --------")

console.log("Ano que eu nasci -> ", birthYear);

console.log("\n---------- Alterando Cidade que eu nasci --------")

birthCity = "Londres"; /* O motivo do erro é que não podemos alterar valores constantes */

console.log("Cidade Natal -> ", birthCity);
