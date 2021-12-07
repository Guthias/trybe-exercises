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
// showObjectLength(lesson1);

// Exercicio 4
const showObjectValues = object => {
  values = Object.values(object);
  console.log(`Os valores desse objeto são ${values.slice(0, - 1).join(', ')} e ${values.slice(-1)}`);
}
// showObjectValues(lesson1);

// Exercicio 5

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});

// console.log(allLessons)

// Exercicio 6

const allStudents = () => {
  keys = Object.keys(allLessons);
  let totalSum = 0;
  for (let i = 0; i < keys.length; i += 1) {
    if (allLessons[keys[i]].hasOwnProperty('numeroEstudantes')) {
      totalSum += allLessons[keys[i]]['numeroEstudantes'];
    }
  }
  return totalSum;
}
console.log(allStudents());
