#!/usr/bin/env node
import { getUserInfo, greetingUser } from '../src/cli.js';

const userName = greetingUser();

console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");

const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


const parityCheck = (num) => {
    if (num % 2 === 0) {
        return "yes";
    }
    return "no";
};



for (let i = 1; i <= 3; i += 1) {
    const randomNum = getRandomInRange(1, 100);
    console.log(`Question: ${randomNum}`);

    const userAnswer = getUserInfo("Your answer:");
    const rightAnswer = parityCheck(randomNum);

    if (userAnswer === rightAnswer) {
        console.log("Correct!");
        if (i === 3) {
            console.log(`Congratulations, ${userName}!`);
        }
        
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        break;
    };
   
};





