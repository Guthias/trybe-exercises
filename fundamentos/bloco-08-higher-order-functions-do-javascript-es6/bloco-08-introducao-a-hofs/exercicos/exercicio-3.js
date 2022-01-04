const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const valuation = (correct, student, values) => {
  let points = 0;
  for (let i = 0; i < correct.length; i += 1) {
    points += values(correct[i], student[i]);
  }
  return points;
}

const points = valuation(RIGHT_ANSWERS, STUDENT_ANSWERS, (correct, student) => {
  if (student === 'N.A') return;
  if (student === correct) 1;
  return -0.5;
});

console.log(points);