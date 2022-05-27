const readlineSync = require("readline-sync");

var num = 0;

num = readlineSync.question('Enter number to factorialize');

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  console.log(factorialize(num));