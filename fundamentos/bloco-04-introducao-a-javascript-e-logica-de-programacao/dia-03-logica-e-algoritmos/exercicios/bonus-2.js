const num = 15877;
let primo = true;

if (num % 2 == 1){
  for (let count = 0; count >= 2; count +=2){
    if (count % num == 0){
      primo = false
      break;
    }
  }
}else{
  primo = false;
}

if (primo){
  console.log(`${num} é um numero primo`);
} else {
  console.log(`${num} não é um numero primo`);
}
