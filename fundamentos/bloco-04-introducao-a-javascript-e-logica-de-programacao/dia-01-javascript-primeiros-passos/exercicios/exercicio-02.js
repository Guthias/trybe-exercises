const a = 20;
const b = 10;

if (typeof a == 'number' && typeof b == 'number'){
  if (a > b) {
    console.log("A é maior do que B");
  } else if (a < b) {
    console.log("A é menor do que B");
  } else {
    console.log("Os valores A e B são iguais");
  }
} else {
  console.log("Um dos valores não é um numero");
}
