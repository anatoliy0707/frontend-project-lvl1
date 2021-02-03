import getRandomInRange from '../random-mechanism.js';
import gameLogic from '../index.js';

const getRandomOperator = (coll = ['+', '-', '*']) => coll[Math.floor(Math.random() * coll.length)];

const getExpression = (operandOne, operandTwo, operator) => {
  switch (operator) {
    case '+':
      return operandOne + operandTwo;
    case '-':
      return operandOne - operandTwo;
    case '*':
      return operandOne * operandTwo;
    default:
      return false;
  }
};

const calcGameData = () => {
  const operandOne = getRandomInRange(1, 100);
  const operandTwo = getRandomInRange(1, 100);
  const operator = getRandomOperator();
  const question = `${operandOne} ${operator} ${operandTwo}`;
  const rightAnswer = String(getExpression(operandOne, operandTwo, operator));
  const result = [question, rightAnswer];
  return result;
};

const task = 'What is the result of the expression?';

const buildAndRunCalc = () => gameLogic(task, calcGameData);

export default buildAndRunCalc;
