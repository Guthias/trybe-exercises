const salarioBruto = 3000;
let salarioBase;
let salarioLiquido;
let INSS;
let IR;

/** INSS (Instituto Nacional do Seguro Social)
  * Salário bruto até R$ 1.556,94: alíquota de 8/
  * Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9/
  * Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11/
  * Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
  */

if (salarioBruto < 1594.95){
  INSS = (salarioBruto / 100) * 8;
} else if(salarioBruto >= 1594.95 && salarioBruto < 2594.93){
  INSS = (salarioBruto / 100) * 9;
} else if(salarioBruto >= 2594.93 && salarioBruto < 5189.82 ){
  INSS = (salarioBruto / 100) * 11;
} else {
  INSS = 570.88;
}

salarioBase = salarioBruto - INSS;

/**IR (Imposto de Renda)
  * Até R$ 1.903,98: isento de imposto de renda
  * De R$ 1.903,99 a 2.826,65: alíquota de 7,5/ e parcela de R$ 142,80 a deduzir do imposto
  * De R$ 2.826,66 a R$ 3.751,05: alíquota de 15/ e parcela de R$ 354,80 a deduzir do imposto
  * De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5/ e parcela de R$ 636,13 a deduzir do imposto
  * Acima de R$ 4.664,68: alíquota de 27,5/ e parcela de R$ 869,36 a deduzir do imposto.
  */



if (salarioBase < 1903.99){
  IR = 0;
} else if (salarioBase >= 1903.99 && salarioBase < 2826.66){
  IR = ((salarioBase / 100) * 7.5) - 142.80;
} else if(salarioBase >= 2826.66 && salarioBase < 3751.06){
  IR = ((salarioBase / 100) * 15) - 354.80;
} else if(salarioBase >= 3751.06 && salarioBase < 4664.69){
  IR = ((salarioBase / 100) * 22.5) - 636.13;
} else {
  IR = ((salarioBase / 100) * 27.5) - 869.36;
}

salarioLiquido = salarioBase - IR;

console.log(`O salario liquido de quem recebe R$ ${salarioBruto} é R$ ${salarioLiquido}`);
