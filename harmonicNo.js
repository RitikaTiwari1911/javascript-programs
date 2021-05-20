//Harmonic number is of form H(n)=1/1 + 1/2 + 1/3 + 1/4 +....+ 1/n

const ps = require("prompt-sync");
const prompt = ps();

let num = prompt("Enter a number");

for(i=1; i<=num; i++){
    let HarmonicNo = 1/i;
    console.log(HarmonicNo);
}
