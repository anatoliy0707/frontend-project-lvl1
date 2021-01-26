import readlineSync from 'readline-sync';


const getUserInfo = (question) => readlineSync.question(`${question} `);



const greetingUser = () => {
    console.log('Welcome to the Brain Games!');
    const userName = getUserInfo("May I have your name?")
    console.log(`Hello, ${userName}!`);
    return userName
};


export { getUserInfo, greetingUser };