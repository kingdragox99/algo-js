const readlineSync = require("readline-sync");

var y = rand100(y);

function rand100(y){
    return y = Math.floor(Math.random() * 101);
}

function ask (n){
    while(n != y){
        var n = readlineSync.question('What is my number ?');
        if(n == y){
            console.log("You win gg");
            break;
        }
        if(n > y){
            console.log("Is the wrong number !!!");
            console.log("To high");
        }
        if(n < y){
            console.log("Is the wrong number !!!");
            console.log("To low");
        }
    } 
}
rand100();
ask();