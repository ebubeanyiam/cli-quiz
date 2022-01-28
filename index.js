#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let player_name;

const timeout = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcomeText() {
  const rainbow_title = chalkAnimation.rainbow(
    "Are you Apex's best quizzer \n"
  );

  await timeout();
  rainbow_title.stop();

  console.log(`
  ${chalk.bgBlue("HOW TO PLAY")}
  I am a process on your computer.
  If you get any question I will be ${chalk.bgRed("killed")}
  So get all the questions right...
  `);
}

async function getName() {
  const answers = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "What is your name?",
    default() {
      return "Player";
    },
  });

  player_name = answers.player_name;
}

async function question1() {
  const answers = await inquirer.prompt({
    name: "question_1",
    type: "list",
    message: "Javascript was created in 10 days and released on what date? \n",
    choices: [
      "May 23rd. 1995",
      "Nov 24th, 1995",
      "Dec 4th, 1995",
      "Apr 13th, 1996",
    ],
  });

  return handleAnswer(answers.question_1 === "Dec 4th, 1995");
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner("checking answer...").start();
  await timeout();

  if (!isCorrect) {
    spinner.error({ text: `Oops. Game over, you lose!` });
    return process.exit(1);
  }

  return spinner.success({ text: `Nice Work ${player_name}.` });
}

function winner() {
  console.clear();
  const msg = `Congrats ${player_name}. \n You've won this quiz challenge`;

  figlet(msg, (_, data) => {
    console.log(gradient.pastel.multiline(data));
  });
}

await welcomeText();
await getName();
await question1();
await winner();
