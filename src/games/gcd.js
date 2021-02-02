import getRandomInRange from "../random-mechanism.js";
import gameLogic from "../index.js";

const nod = (n, m) => {
  if (m > 0) {
    const k = n % m;
    return nod(m, k);
  }
  return n;
};

const gcdGameData = () => {
  const num1 = getRandomInRange(1, 100);
  const num2 = getRandomInRange(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = String(nod(num1, num2));
  const result = [question, rightAnswer];
  return result;
};

const task = "Find the greatest common divisor of given numbers.";

const buildAndRunGcd = () => gameLogic(task, gcdGameData);

export default buildAndRunGcd;
