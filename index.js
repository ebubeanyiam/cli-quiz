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
