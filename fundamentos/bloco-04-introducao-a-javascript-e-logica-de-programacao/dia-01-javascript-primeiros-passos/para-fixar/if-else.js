const nota = 100;

if(nota >= 1 && nota <= 100){
  if(nota >= 80){
    console.log("Parabéns, você foi aprovada(o) com a nota", nota);
  }else if(nota < 80 && nota >= 60){
    console.log("Você está na nossa lista de espera com a nota", nota);
  }else{
    console.log("Você foi reprovada(o) com a nota", nota);
  }
}else{
  console.log(nota, "Não é uma nota valida")
}
