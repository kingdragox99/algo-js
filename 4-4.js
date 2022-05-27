var arr = [];
var minimum;
var maximum;
var avg;

const readlineSync = require("readline-sync");

var val = readlineSync.question('Un nombre');

function rand10(){
    return Math.floor(Math.random() * 11);
   }

function multiRand(n){
    for(var i = 0; i < n; i++){
        arr[i]=rand10();
    }
}

function average(arr){
   return avg = arr.reduce((a, b) => a + b, 0) / arr.length;
}

function max(arr){
    return maximum = Math.max(...arr);
}

function min(arr){
   return minimum = Math.min(...arr);
}
    multiRand(val);
    console.log(arr);
    console.log(max(arr));
    console.log(min(arr));
    console.log(average(arr));