/* A year is a leap year if the following conditions are satisfied:
The year is multiple of 400
The year is multiple of 4 and not 100 */

const ps = require("prompt-sync");
const prompt = ps();

let year = prompt("Enter the year");
year = Number(year);
if (year < 9999 && year > 1000) {
    if ((((year % 4) == 0) && ((year % 100) != 0)) || ((year % 400) == 0)){
        console.log(+year + " is  a leap year");
    }

    else{
        console.log(+year + " is not a leap year");
    }
}