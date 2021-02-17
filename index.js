// array of questions for user
const questions = [
    // Title
    // Project Description
    // Project Installation
    // Project Usage
    // Project Licenses
    // Project Contributors
    // Project Tests
    // Github username
    // Github email
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

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