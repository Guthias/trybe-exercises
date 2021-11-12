function comparaFinal (frase, final){
  let finalFrase = frase.substr(frase.length - final.length)
  if (finalFrase === final ){
    return true
  }
  return false;
}

console.log(comparaFinal('github', 'hub'));