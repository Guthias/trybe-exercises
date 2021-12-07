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

const addValue = (object, key, value) => {
  if (object.hasOwnProperty(key)) {
    throw new Error('Essa propriedade já existe')
  }
  object[key] = value
};

const showKeys = object => {
  keys = Object.keys(object);
  console.log(`As chaves desse objeto são ${keys.slice(0, - 1).join(', ')} e ${keys.slice(-1)}`);
}

addValue(lesson2, 'turno', 'noite');
showKeys(lesson3);
