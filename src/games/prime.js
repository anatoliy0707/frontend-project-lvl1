import getRandomInRange from "../random-mechanism.js";
import gameLogic from "../index.js";

const isPrime = (num) => {
  if (num <= 1) {
    return "no";
  } else {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return "no";
      }
    }
    return "yes";
  }
};

const primeGameData = () => {
  const question = getRandomInRange(1, 20);
  const rightAnswer = String(isPrime(question));
  const result = [question, rightAnswer];
  return result;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const buildAndRunPrime = () => gameLogic(task, primeGameData);

export default buildAndRunPrime;
