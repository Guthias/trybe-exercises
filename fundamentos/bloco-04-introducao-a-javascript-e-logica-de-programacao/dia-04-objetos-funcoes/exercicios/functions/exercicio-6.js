function somaTodosValores (n) {
  let somaTotal = 0;
  for (let c = 1; c <= n; c++){
    somaTotal += c;
    console.log(c);
  }
  return somaTotal
}

console.log(somaTodosValores(5));