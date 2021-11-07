const pontos = 50;
let nota;

if (pontos <= 100 && pontos >= 0){
  if (pontos >= 90){
    nota = "A";
  } else if (pontos >= 80){
    nota = "B";
  } else if (pontos >= 70){
    nota = "C";
  } else if (pontos >= 60){
    nota = "D";
  } else if (pontos >= 50){
    nota = "E";
  } else {
    nota = "F";
  }
  console.log(`Sua nota é "${nota}"`);
} else {
  console.log("Valor de pontos invalido")
}
