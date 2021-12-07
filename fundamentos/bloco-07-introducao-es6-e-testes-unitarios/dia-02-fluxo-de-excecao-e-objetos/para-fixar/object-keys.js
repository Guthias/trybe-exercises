const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom',
};

// Utilizando for / in
// const listSkills = student => {
//   for (key in student) {
//     console.log(`Nivel em ${key}: ${student[key]}`);
//   }
// };

// Utilizando for convencional e Object Keys
const listSkills = student => {
  studentKeys = Object.keys(student);

  for (let i = 0; i < studentKeys.length; i += 1) {
    console.log(`Nivel em ${studentKeys[i]}: ${student[studentKeys[i]]}`)
  }
}

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);
