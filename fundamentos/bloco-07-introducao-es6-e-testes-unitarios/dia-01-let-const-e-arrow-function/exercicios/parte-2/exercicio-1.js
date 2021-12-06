const fatorial = n => {
  if (n > 1) {
    return n * fatorial(n - 1);
  } else {
    return 1
  }
}

console.log(fatorial(0)); // 1
console.log(fatorial(1)); // 1
console.log(fatorial(2)); // 2
console.log(fatorial(3)); // 6
console.log(fatorial(4)); // 24
console.log(fatorial(5)); // 120
console.log(fatorial(6)); // 720
