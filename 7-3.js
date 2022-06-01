const readlineSync = require("readline-sync");

var diviserArr = [];
var n = number(n);

function number(n){
    var n = readlineSync.question("Take a number and see is divider");
    for (let i = 1; i < n; i++){
        if (i % n == 0){
            console.log(diviserArr);
            return diviserArr[i] = i;
        }
    }
}

number();