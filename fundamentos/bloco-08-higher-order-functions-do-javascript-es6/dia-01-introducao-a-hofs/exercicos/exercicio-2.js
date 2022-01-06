const lottery = (betNumber, checkResult) => checkResult(betNumber) ? 'Parabéns você acertou' : 'Tente novamente';

console.log(lottery(5, n => Math.round(Math.random() * 5) === n));
