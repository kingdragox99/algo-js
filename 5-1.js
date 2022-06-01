const readlineSync = require("readline-sync");

function askTvSerie(){
    var nameShow = readlineSync.question('Name of the Show');
    var productionYear = readlineSync.question('Year of production');
    var cast = [];
    let i = 0;
    while(i != "stop"){
        console.log("write STOP to go out");
        i = readlineSync.question('What is the cast of your show :')
        if(i != "stop"){
            cast.push(i);
            console.log(cast);
        }
    }
    var serie = {nameShow, productionYear, cast}

    let format=readlineSync.question('What foramt you want Object (1) or Json (2) ?');

    switch(format){
        case "1":
        console.log("This is Object format");
        console.log(serie);
        break;

        case "2":
        console.log("This is Json format");
        console.log(JSON.stringify(serie));
        return serie;
    }
  }
askTvSerie();