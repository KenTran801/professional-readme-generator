// const, let, vars
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// array of questions for user
const questions = [
    // Title
    {
        type: 'input',
        name: 'title',
        message: 'Please enter in the project title.',
    },
    // Project Description
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a general description of your project.',
    },
    // Project Installation
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide the steps required to install your project?',
    },
    // Project Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples of use.',
    },
    // Project Licenses
    {
        type: 'list',
        name: 'licenses',
        message: 'Please select the licenses for your project',
        choices: [
            'GNU',
            'Mozilla',
            'Apache',
            'MIT',
        ],
    },
    // Project Contributors
    {
        type: 'input',
        name: 'contributors',
        message: 'Please provide the contribtors or how to contribute to your project.',
    },
    // Project Tests
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide for tests for your application and example on how to run them.',
    },
    // Questions section
    // Github Username
    {
        type: 'input',
        name: 'username',
        message: 'Please provide your GitHub username.',
    },
    // Email
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
    },
];
// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,), (err) =>
        err ? console.log(err) : console.log('Success! A file has been created')
}

// function to initialize program
async function init() {
    try {
        const userAnswers = await inquirer.prompt(questions);
        
    } catch (error) {
        console.log(error);
    }
}
// function call to initialize program
init();


// Code from tutor session using as reference
// var inquirer = require('inquirer');
// async function askUser(){
// 	try {
// 			var foodDrinkAnswer = await inquirer.prompt([
// 			  {
// 				  message: 'What is your favorite food?',
// 				  name: 'food',
// 				  type: 'input'
// 			  },
// 			  {
// 				  message: 'What is your favorite drink?',
// 				  name: 'drink',
// 				  type: 'input'
// 			  }
// 			])
// 			var toppingAnswer
// 			if (foodDrinkAnswer.food === 'pizza') {
// 			  toppingAnswer = await inquirer.prompt([
// 				  {
// 					  message: 'What topping?',
// 					  name: 'topping',
// 					  type: 'input'
// 				  },
// 				])
// 			}
// 			if (foodDrinkAnswer.drink === 'juice') {
// 			  juiceAnswer = await inquirer.prompt([
// 				  {
// 					  message: 'What juice?',
// 					  name: 'juiceType',
// 					  type: 'input'
// 				  },
// 				])
// 			}
// 			answerMaser = {...foodDrinkAnswer}
// 			if (toppingAnswer){
// 				  console.log('hits');
// 				answerMaser = {...answerMaser, ...toppingAnswer}
// 			}
// 			if (juiceAnswer){
// 			  console.log('hits');
// 				answerMaser = {...answerMaser, ...juiceAnswer}
// 		   }
// 			console.log(answerMaser);
// 	} catch (error){
// 		console.log(error);
// 	}
// }
// askUser()