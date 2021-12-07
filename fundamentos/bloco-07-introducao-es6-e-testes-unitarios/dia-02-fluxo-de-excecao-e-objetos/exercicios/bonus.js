const allLessons = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'noite'
  },
  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
}

// Exercicio 1

const mathStudents = () => {
  let students = 0;
  const allLessonsArray = Object.entries(allLessons);

  for (let i = 0; i < allLessonsArray.length; i += 1) {
    
    if (allLessonsArray[i][1]['materia'] === 'Matemática') {
      students += allLessonsArray[i][1]['numeroEstudantes']
    }
  }

  return `Numero total de estudantes de Matemática: ${students}`;
}

console.log(mathStudents());

// Exercicio 2

const createReport = (object, teacher) => {
  const keys = Object.keys(object);
  const classes = [];
  let students = 0;

  for (let i = 0; i < keys.length; i += 1) {
    if (object[keys[i]]['professor'] === teacher) {
      students += object[keys[i]]['numeroEstudantes'];
      classes.push(object[keys[i]]['materia']);
    }
  }

  return {
    professor: teacher,
    aulas: classes,
    estudantes: students
  }
}

console.log(createReport(allLessons, 'Maria Clara'));
