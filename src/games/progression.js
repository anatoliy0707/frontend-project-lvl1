import getRandomInRange from "../random-mechanism.js";
import gameLogic from "../index.js";

const getProgression = () => {
  const startNum = getRandomInRange(1, 89);
  const result = [startNum];
  const progressionLength = getRandomInRange(5, 10);
  const progressionStep = getRandomInRange(1, 5);
  for (let i = 0; i <= progressionLength; i += 1) {
    result.push(result[i] + progressionStep);
  }
  return result;
};

const progressionGameData = () => {
  const star = "..";
  const question = getProgression();
  const radnomIndex = getRandomInRange(1, question.length - 1);
  const rightAnswer = String(question[radnomIndex]);
  question[radnomIndex] = star;
  const result = [question, rightAnswer];
  return result;
};

const task = "What number is missing in the progression?";

const buildAndRunProgression = () => gameLogic(task, progressionGameData);

export default buildAndRunProgression;
