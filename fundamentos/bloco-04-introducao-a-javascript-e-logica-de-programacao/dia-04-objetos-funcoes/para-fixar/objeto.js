// Criando o objeto
let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  }
}

// Pegando e imprimindo valores do objeto
console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`);

// Adicionando nova propriedade no Array
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// Imprimindo valor da nova propriedade e array
console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes`);

// Acessando o objeto dentro de objeto
console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} de prata`);
