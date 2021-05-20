const ps = require("prompt-sync");
const prompt = ps();
let num = prompt("Enter a number: ");
num = Number(num);

for (i=1; i<=num; i++){
    let table = Math.pow(2,i)
    console.log(2+"^"+i+"="+table);
}
