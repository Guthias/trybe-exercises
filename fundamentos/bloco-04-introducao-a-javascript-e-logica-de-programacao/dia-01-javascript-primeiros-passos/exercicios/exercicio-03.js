const a = 20;
const b = 15;
const c = 50;

if (a > b && a > c) {
  console.log(`${a} é maior do que ${b} e ${c}`);
} else if (b > a && b > c) {
  console.log(`${b} é maior do que ${a} e ${c}`);
} else if (c > a && c > b) {
  console.log(`${c} é maior do que ${b} e ${a}`);
}
