/** @format */

import chalk from "chalk";
import readLine from "readline-sync";
import { questionsArray, highScore } from "./utils.js";

console.log(chalk.bold.blue("Hello there I am Deepak"));
console.log(chalk.bold.red("Lets check how much you know me!!"));

let score = 0;

const evalute = (question, answer) => {
  console.log(chalk.bgYellow.red.bold(question));
  const userInput = readLine.question().toLowerCase();

  if (userInput === answer.toLowerCase()) {
    score += 1;
    console.log("your score is is " + score);
  } else {
    console.log(`Oops!! Wrong answer your score is ${score}`);
  }

  return score;
};

const userName = readLine.question("What is you name?\n");
console.log(
  chalk.magenta.italic.bold(
    `Hi ${userName ? userName.toLocaleUpperCase() : "buddy"} lets play`
  )
);

for (let i = 0; i < questionsArray.length; i++) {
  evalute(questionsArray[i].question, questionsArray[i].answer);
}

console.log(chalk.cyanBright.bold("\nYour Score is " + score));

if (score >= highScore[0].score) {
  console.log(
    chalk.green.bold("\nYayyy!! You scored the Highest Score! Congratulations!")
  );
} else {
  for (let i = 0; i < highScore.length; i++) {
    console.log(highScore[i].name, highScore[i].score);
  }
}
