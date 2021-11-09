const n = 5;
let line = "";

if (n > 1){
  for (let y = 0; y < n; y+=1){
    line = "";
    for (let x = 0; x < n; x += 1){
      if (x + 1 >= n - y){
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
} else {
  console.log(`${n} não é um valor valido`);
}