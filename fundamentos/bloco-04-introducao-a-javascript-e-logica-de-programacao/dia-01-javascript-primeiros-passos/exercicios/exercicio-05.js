const a = -10;
const b = 60;
const c = 60;

let isSquad;

if (a < 0 || b < 0 || c < 0) {
  console.log("Algum dos valores não é valido");
} else {
  if (a + b + c == 180){
    isSquad = true;
  } else {
    isSquad = false;
  }
  console.log(isSquad);
}
