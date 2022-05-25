const readlineSync = require("readline-sync");

var n = readlineSync.question('Put a number here');

let sum = 0;

for (var c = 0;c < n ;c++){
    var i = new Number (readlineSync.question('Nombre'));
    sum+=i;
    
}
console.log(sum);