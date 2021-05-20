const ps = require("prompt-sync");
const prompt = ps();

let num = prompt("Enter a number between 0 and 7: ");
num = Number(num);

switch(num){
    case  1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Enter the correct number!!");
        break;
}