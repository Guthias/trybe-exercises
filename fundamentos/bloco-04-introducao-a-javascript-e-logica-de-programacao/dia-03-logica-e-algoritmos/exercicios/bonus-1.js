const n = 7;
let line = "";

if (n > 1){
  for (let y = 0; y < n; y+=2){
    line = "";
    let empty = (n - (y + 1)) / 2; //Number of empty spaces
    let blocks = n - (empty*2);
    line += " ".repeat(empty);
    
    if(y+1 < n){
      if (blocks >= 3){
        line += "*";
        line += " ".repeat(blocks - 2);
        line += "*";
      }else{
        line += "*";
      }
    }else{
      line += "*".repeat(blocks);
    }
    console.log(line);
  }
} else {
  console.log(`${n} não é um valor valido`);
}
