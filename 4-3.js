var multir = [];

const readlineSync = require("readline-sync");

var val = readlineSync.question('Un nombre');

function rand10(n){
    return Math.floor(Math.random() * 11);

   }

function multiRand(n){
    for(var i = 0; i < n; i++){
        multir[i]=rand10();
    }
}

    multiRand(val);
   console.log(multir);