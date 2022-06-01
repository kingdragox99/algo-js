const readlineSync = require("readline-sync");

function elevator(left,call,right){
    let x = left-call;
    let y = right-call;
    s=Math.abs(x);
    v=Math.abs(y);
    if(s>=v){
        console.log("right");
    }else{
        console.log("left");
    }
}
let a = readlineSync.question('where is the left lift ?  ');
let b = readlineSync.question('where are you ?  ');
let c = readlineSync.question('where is the right lift ?  ');
elevator(a, b, c);