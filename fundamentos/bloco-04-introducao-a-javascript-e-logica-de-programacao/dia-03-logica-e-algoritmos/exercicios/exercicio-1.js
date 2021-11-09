const n = 7;
let line = "";

if (n > 1){
  for (let y = 0; y < n; y+=1){
    line = "";
    for (let x = 0; x < n; x += 1){
      line += "*";
    }
    console.log(line);
  }
} else {
  console.log(`${n} não é um valor valido`);
}