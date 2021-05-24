const prompt = require('prompt-sync')();
// take input from the user
let num =prompt("Enter a positive number: ");
num= Number(num);

let i=0 ;
let power=1;
while ( i <= num) {
    if(power >= 256) 
    break;
    let table = Math.pow(2,power);
    power++
    console.log(2+"^"+i+"="+table)
    i++;
}
