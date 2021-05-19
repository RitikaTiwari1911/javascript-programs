const ps = require("prompt-sync");
const prompt = ps();

let num = prompt("Enter the unit number: ");
num = Number(num);

if(num == 1)
console.log("unit");

else if(num == 10)
console.log("Ten");

else if(num == 100)
console.log("Hundred");

else if(num == 1000)
console.log("Thousand");

else if(num == 10000)
console.log("Ten Thousand");

else if(num == 100000)
console.log("Lakh");

else
console.log("Enter the correct number!!")
