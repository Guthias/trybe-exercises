const n = 7;
let line = "";

if (n > 1){
  for (let i = 0; i < n; i+=1){
    line = "";
    for (let i = 0; i < n; i += 1){
      line += "*";
    }
    console.log(line);
  }
} else {
  console.log(`${n} não é um valor valido`);
}