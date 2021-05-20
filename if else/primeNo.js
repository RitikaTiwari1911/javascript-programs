//Prime number is a number which is only divisible by itself and by 1

const ps = require("prompt-sync");
const prompt = ps();

let num = prompt("Enter a number");
num = Number(num);

if (num<=1){
	console.log(num+" is not prime");
}

for(i=2; i<num; i++){
	if(num % i !=0){
		console.log(num+" is prime");
        break;
    }
	else{
        console.log(num+" is not prime");
        break;
    }
}


