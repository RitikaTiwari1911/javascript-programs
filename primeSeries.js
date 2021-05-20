//Prime number is a number which is only divisible by itself and by 1

const ps = require("prompt-sync");
const prompt = ps();

//Taking the starting number of the series
let numStart = prompt("Enter the lower limit number: ");
numStart = Number(numStart);

//Taking the end number of the series
let numEnd = prompt("Enter the upper limit number: ");
numEnd = Number(numEnd);

console.log("The prime numbers in the series from "+numStart+" and "+numEnd+ " is: ")

//Traversing between the lower range and the upper range
for(i=numStart; i<=numEnd; i++){
    //Skipping 0 and 1 as they are neither prime nor composite number
    if(i == 0 || i == 1)
        continue;
    flag = 1 //flag variable to tell if the number is prime or not
    for(counter=2; counter<=i/2; ++counter){
       
        if(i % counter ==0){
           flag = 0;
           break;
        } 
        if(flag == 1){
            console.log(i);
            break;
        }
    }
}
