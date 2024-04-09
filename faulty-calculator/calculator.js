const readlineSync = require("readline-sync");

console.log(" WELCOME ");
console.log(
  "you can choose among the following options in order to perform the calculations: 1. Addition (+) 2. Subtraction (-) 3. Multiplication (*)  4. Division (/)"
);

var choice = readlineSync.questionInt("Please enter your choice: ");
var num1 = readlineSync.questionInt("Enter first number: ");
var num2 = readlineSync.questionInt("Enter second number: ");

var rand = Math.random();

console.log(rand); 

switch (choice) {
  case 1:
    if (rand < 0.1) {
          
        var sum = num1 - num2
    } else {
          
        var sum = num1 + num2  
    }
    console.log(`Result: ${sum}`)
    break;
  case 2:
    if (rand < 0.1) {  
        var subtract = num1 / num2
    } else {  
        var subtract = num1 - num2
    }
    console.log(`Result: ${subtract}`)
    break;
  case 3:
    if (rand < 0.1) {  
        var multiply = num1 + num2
    } else {  
        var multiply = num1 * num2
    }
    console.log(`Result: ${multiply}`)
    break;
  case 4:
    if (rand < 0.1) {  
        var divide = num1 ** num2
    } else {  
        var divide = num1 / num2
    }
    console.log(`Result: ${divide}`)
    break;
    default:
        console.log("Invalid Input!")
}

console.log("It was nice helping you ;)")