import readlineSync from "readline-sync";
import greetingUser from "./cli.js";

const gameLogic = (task, questionAndAnswer) => {
  const userName = greetingUser();

  console.log(task);

  for (let i = 1; i <= 3; i += 1) {
    const [question, rightAnswer] = questionAndAnswer();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer === rightAnswer) {
      console.log("Correct!");
      if (i === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export default gameLogic;
