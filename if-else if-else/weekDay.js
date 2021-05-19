const ps = require("prompt-sync");
const prompt = ps();

let num = prompt("Enter a number between 0 and 7: ");
num = Number(num);

if(num == 1)
console.log("Monday");

else if(num == 2)
console.log("Tuesday");

else if(num == 3)
console.log("Wednesday");

else if(num == 4)
console.log("Thursday");

else if(num == 5)
console.log("Friday");

else if(num == 6)
console.log("Saturday");

else if(num == 7)
console.log("Sunday");

else
console.log("Enter the correct number!!")
