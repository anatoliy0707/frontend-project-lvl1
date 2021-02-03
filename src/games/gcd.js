import getRandomInRange from '../random-mechanism.js';
import gameLogic from '../index.js';

const getNod = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return getNod(m, k);
  }
  return n;
};

const gcdGameData = () => {
  const ferstNum = getRandomInRange(1, 100);
  const secondNum = getRandomInRange(1, 100);
  const question = `${ferstNum} ${secondNum}`;
  const rightAnswer = String(getNod(ferstNum, secondNum));
  const result = [question, rightAnswer];
  return result;
};

const task = 'Find the greatest common divisor of given numbers.';

const buildAndRunGcd = () => gameLogic(task, gcdGameData);

export default buildAndRunGcd;
