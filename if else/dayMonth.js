//print true if the month and day is between March 20 and June 20, otherwise print false

const ps = require("prompt-sync");
const prompt = ps();

let date = prompt("Enter the date: ");
date = Number(date);

let month = prompt("Enter the month: ");
month = Number(month);

//for non March-June months
if(month==1 || month ==2 || month>=7){
    console.log("Enter the month between March and June");
}

//for the month of March
if(month == 3){
    if(date>=20 && date<=31){
    console.log("True");
    }
    else
    console.log("False");
}

//for the month of April
if(month == 4){
    if(date >= 1 && date <= 30){
    console.log("True"); 
    }
    else
    console.log("False");
}

//for the month of May
if(month == 5){
    if(date >=1 && date <= 31){
    console.log("True"); 
    }
    else
    console.log("False");
}

//for the month of June
if(month == 6){
    if(date >=1 && date <=20){
    console.log("True"); 
    }
    else
    console.log("False");
}
