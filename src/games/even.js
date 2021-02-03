import getRandomInRange from '../random-mechanism.js';
import gameLogic from '../index.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const evenGameData = () => {
  const question = getRandomInRange(1, 100);
  const rightAnswer = isEven(question);
  const result = [question, rightAnswer];
  return result;
};

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const buildAndRunEven = () => gameLogic(task, evenGameData);

export default buildAndRunEven;
