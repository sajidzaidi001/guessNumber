#! usr/bin/env node
import inquirer from "inquirer";
console.log("Lets get a number b/w 1 to 10 in 03 tries");
let actualAnswer: number =  Math.floor(Math.random()*10);
let guessNumber: number = 7
let numTries: number = 3;
const answer= await inquirer.prompt({
    
        type: "number",
        name: "userGuess",
        message: "Enter your Guess Number"
  });
  
  if(answer.userGuess==actualAnswer){
    console.log("You guessed the right answer")
  console.log(`You have ${numTries-1} left`)
  
  }else{
    console.log("You are Wrong");
    numTries--;
  }
  

