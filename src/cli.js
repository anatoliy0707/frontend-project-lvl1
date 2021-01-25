import readlineSync from 'readline-sync';

const greeting = () => readlineSync.question('May I have your name? ');

export default greeting;
