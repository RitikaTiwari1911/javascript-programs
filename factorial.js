//factorial series => f(5)=5*4*3*2*1
const ps = require("prompt-sync");
const prompt = ps();

let num = prompt("Enter a number: ");
num = Number(num);
let fact = 1;

for(i=1; i<=num; i++){
    fact= fact * i;
}
console.log("Factorial of "+num+ " is: "+fact);