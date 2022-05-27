const readlineSync = require("readline-sync");

var z = 0;
var x = 0;

function calcDistance(z,x){
    /*Fonction qui calcule la distance entrée pas un user on fais entré des donnée par l'user et il en restort des coordonéé transformé eb valeur*/
        var z1 = readlineSync.question('Z axe of pose one');
        var x1 = readlineSync.question('X axe of pose one');
        var z2 = readlineSync.question('Z axe of pose one');
        var x2 = readlineSync.question('X axe of pose one');
        return(x = z2 - z1, z = x1 - x2);
}

console.log(Math.hypot(calcDistance(z, x)));