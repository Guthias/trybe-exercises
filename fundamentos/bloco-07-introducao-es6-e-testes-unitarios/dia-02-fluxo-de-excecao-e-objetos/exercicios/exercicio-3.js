const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercicio 1
const addValue = (object, key, value) => {
  if (object.hasOwnProperty(key)) {
    throw new Error('Essa propriedade já existe')
  }
  object[key] = value
};
addValue(lesson2, 'turno', 'noite');

// Exercicio 2
const showKeys = object => {
  keys = Object.keys(object);
  console.log(`As chaves desse objeto são ${keys.slice(0, - 1).join(', ')} e ${keys.slice(-1)}`);
}
// showKeys(lesson3);

// Exercicio 3
const showObjectLength = object => console.log(`Esse objeto tem ${Object.keys(object).length} chaves`);
showObjectLength(lesson1);

