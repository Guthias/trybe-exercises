const skills = ['HTML', 'CSS', 'Bash', 'Unix', 'JavaScript'];

const welcome = name => `Tryber ${name} aqui!`;
const sentence = (name, skills) => `${welcome(name)} Minhas cinco principais habilidades são ${skills.sort().slice(0, -1).join(', ')} e ${skills.sort().slice(-1)}`;

console.log(sentence('Guthias', skills));
