const generateEmployer = name => {
  return {
    fullName: name,
    email: name.toLowerCase().replace(' ', '_') + '@trybe.com'
  }
}

const newEmployees = () => {
  const employees = {
    id1: generateEmployer('Pedro Guerra'),
    id2: generateEmployer('Luiza Drumond'),
    id3: generateEmployer('Carla Paiva')
  }
  return employees;
};

// console.log(newEmployees());