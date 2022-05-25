const readlineSync = require("readline-sync");

let firstName = readlineSync.question('Can you give me your first name please?');
let name = readlineSync.question('Can you give me your name please?');
let city = readlineSync.question('Can you give me your city please?');

console.log(`Your name is ${firstName} ${name} and you live in ${city}`);

let numOne = readlineSync.question('Can you give me a number with a decimal part');
let numTwo = readlineSync.question('Can you give me a second number with decimal part');
let result = Math.trunc(numOne)*numTwo;

console.log(`your number is ${result}`);

let numOnet = readlineSync.question('Can you give me a number no decimal');
let numTwot = readlineSync.question('Can you give me a second number no decimal');
let resultt = numOnet % numTwot;

console.log(`your number is ${resultt}`);