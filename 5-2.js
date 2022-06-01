const readlineSync = require("readline-sync");

var cast = [];
var tvSeries = [];

function askTvSerie(){
    var nameShow = readlineSync.question('Name of the Show');
    var productionYear = readlineSync.question('Year of production');
    let i = 0;
    while(i != "stop"){
        console.log("write STOP to go out");
        i = readlineSync.question('What is the cast of your show :')
        if(i != "stop"){
            cast.push(i);
            console.log(cast);
        }
    }
    var Series = {nameShow, productionYear, cast}

    let format = readlineSync.question('What foramt you want Object (1) or Json (2) ?');

    switch(format){
        case "1":
        console.log("This is Object format");
        console.log(Series);

        case "2":
        console.log("This is Json format");
        console.log(JSON.stringify(Series));
        return Series;
    }
  }

function randomizeCast(tvSeries){
    return tvSeries = [...cast].sort(() => Math.random() - 0.5);
}
console.log(randomizeCast(tvSeries));

randomizeCast();
askTvSerie();