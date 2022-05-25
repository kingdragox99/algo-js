const readlineSync = require("readline-sync");

let num = readlineSync.question('What is you favorit number ?');

while(num != 42){
    let num = readlineSync.question('What is you favorit number ?');
    if(num == 42){
        console.log("Your know the right awser");
        break;
    }
}