const ps = require("prompt-sync");
const prompt = ps();

let num = prompt("Enter a number: ");
num = Number(num);

let table = 0;
let count = 1

//to print the power of 2 table till 256 is reached
while(table <= 256){
    table = Math.pow(2,count);
    count++
    console.log(table);
}
