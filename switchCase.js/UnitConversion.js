const ps = require("prompt-sync");
const prompt = ps();
let num = prompt("Enter a number: ");
num = Number(num);

//1 feet = 12 inches
inchesInFeet=12; 
//1 feet = 0.3 meter
meterInFeet = 0.3; 

//Taking input for options
console.log("Enter 1 for Feet to Inches \n Enter 2 for Inches to Feet \n Enter 3 for Feet to Meters \n Enter 4 for Meters to Feet\n");
let option = prompt("Enter the option number: ")
option = Number(option);

switch(option){
    case 1:     //feet to inches
        let feetToInches = num * inchesInFeet;
        console.log(num+" feet is "+feetToInches+" inches");
        break;

    case 2:     //inch to feet
        let inchToFeet = num / inchesInFeet;
        console.log(num+" inches is "+inchToFeet+" feet");
        break;

    case 3:     //feet to meter
        let feetToMeter = num * meterInFeet;
        console.log(num+" feet is "+feetToMeter+" meters");
        break;

    case 4:    //meter to feet
        let meterToFeet = num / meterInFeet;
        console.log(num+" meter is "+meterToFeet+" feet");
        break;

    default:
        console.log("Enter the correct value");
        break;
}
