const readlineSync = require("readline-sync");

let minAge = readlineSync.question('What is the min age ?')
let maxAge = readlineSync.question('What is the max age ?')
let age = readlineSync.question('What is your age ?');

if (age<maxAge && age>minAge)
    console.log(`You age is between ${maxAge} and ${minAge} bcs you have ${age}`);
    else
    console.log(`Error minimu age ${minAge} is bigger than ${maxAge}`);