let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log("----- Verificando tipo das Variaveis -----");
console.log("patiendId -> ", typeof patientId);
console.log("isEnrolled -> ", typeof isEnrolled);
console.log("patiendInfo -> ", typeof patientInfo);
console.log("patiendEmail -> ", typeof patientEmail);

console.log("\n----- Checando patientAge -----");
console.log("patientAge -> ", typeof patientAge);

console.log("\n----- Alterando o patientId -----");
patientId = '50';
console.log("patientId -> ", typeof patientId);

console.log("\n----- Calculando area do Retângulo -----");
const base = 5;
let heigth = 8;
const area = base * heigth;
const perimeter = base * 2 + heigth * 2;

console.log("Base -> ", base);
console.log("Altura -> ", heigth);
console.log("Área -> ", area);
console.log("Perimetro -> ", perimeter);