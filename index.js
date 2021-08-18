/** @format */

import chalk from "chalk";
import readLine from "readline-sync";

console.log(chalk.bold.blue("Hello there I am Deepak"));
console.log(chalk.bold.red("Lets check how much you know me!!"));

let score = 0;

const userName = readLine.question("What is you name?\n");
console.log(
  chalk.magenta.italic.bold(
    `Hi ${userName ? userName.toLocaleUpperCase() : "buddy"} lets play`
  )
);
