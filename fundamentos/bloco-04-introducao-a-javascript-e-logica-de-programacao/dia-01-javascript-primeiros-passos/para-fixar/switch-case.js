const estado = "reprovado";

switch (estado){
  case "aprovado":
    console.log("Parabéns, você foi aprovado");  
  break;

  case "lista":
    console.log("Você está na nossa lista de espera");  
  break;

  case "reprovado":
    console.log("Você foi reprovada(o)");  
  break;

  default:
    console.log("Não se aplica");  
  break;
}
