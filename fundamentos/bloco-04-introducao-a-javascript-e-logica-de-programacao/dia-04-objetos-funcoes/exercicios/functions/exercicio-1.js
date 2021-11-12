function verificaPalindrome(string){
  let stringInvertida = string.split('').reverse().join('');

  if (string === stringInvertida){
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));
