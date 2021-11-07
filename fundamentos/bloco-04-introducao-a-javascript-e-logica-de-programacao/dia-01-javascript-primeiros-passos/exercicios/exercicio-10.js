const valorCusto = 40;
const valorVenda = 60;

let valorCustoTotal = valorCusto + ((valorCusto / 100) * 20);

let lucro = valorVenda - valorCustoTotal;

if(lucro > 0) {
  console.log(`Você tera um LUCRO de R$ ${lucro*1000} ao vender 1000 unidades`); 
} else if (lucro < 0){
  console.log(`Você tera um PREJUIZO DE R$ ${(lucro * -1 ) * 1000} ao vender 1000 unidades`); 
} else {
  console.log(`Você não esta lucro ou prejuizo ao vender esse produto`);
}
