const n = 10;
let line = "";

if (n > 1){
  for (let y = 0; y < n; y+=2){
    line = "";
    let empty = (n - (y + 1)) / 2; //Number of empty spaces
    let blocks = n - (empty*2);
    line += " ".repeat(empty);
    line += "*".repeat(blocks)
    console.log(line);
  }
} else {
  console.log(`${n} não é um valor valido`);
}
