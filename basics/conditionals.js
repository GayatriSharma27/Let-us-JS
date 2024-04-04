console.log("***** Conditional Statements in JS *****");

// use logical operators to find whether the age of a person lies between 10 and 20 ?

let age = 30;

if (age >= 10 && age <= 20) {
  console.log("Age lies between 10 and 20");
} else {
  console.log("Age does not lie in this range.");
}

// demonstrate the use of switch case statements in javascript ?

let option = 2;

switch (option) {
  case 0:
    console.log("Monday");
    break;
  case 1:
    console.log("Tuesday");
    break;
  case 2:
    console.log("Wednesday");
    break;
}

// write a javascript program to find whether a number is divisible by 2 and 3

let number = 6;

if (number % 2 == 0 && number % 3 == 0) {
  console.log("This number is divisible by 2 and 3!!");
} else {
  console.log("This is not divisible by 2 and 3!! ");
}

// write a js program to find whether a number is divisible by either 2 or 3.

let number1 = 6;

if (number1 % 2 == 0 || number1 % 3 == 0) {
  console.log("This number is divisible either by 2 or 3!!");
} else {
  console.log("This is not divisible neither by 2 nor 3!! ");
}

// print 'you can drive ' or "you cannot"  based on age being greater than 18 using ternary operator.

let age1 = 20;

result =
  age1 > 18 ? console.log("You can drive") : console.log("You cannot drive");
