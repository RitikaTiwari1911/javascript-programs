//generating five three digit number
ranNum1 = Math.floor(Math.random() * 1000);
ranNum2 = Math.floor(Math.random() * 1000);
ranNum3 = Math.floor(Math.random() * 1000);
ranNum4 = Math.floor(Math.random() * 1000);
ranNum5 = Math.floor(Math.random() * 1000);



console.log("The five random numbers are "+ranNum1+" "+ranNum2+" "+ranNum3+" "+ranNum4+" "+ranNum5);
//for thr greatest random number
if (ranNum1 > ranNum2 && ranNum1 > ranNum3  && ranNum1 > ranNum4 && ranNum1 > ranNum5 ) {
    console.log("Random number " + ranNum1 + " is greatest");
} 

else if (ranNum2 > ranNum1 && ranNum2 > ranNum3 && ranNum2 > ranNum4 && ranNum2 > ranNum5) {
    console.log("Random number " + ranNum2 + " is greatest");
}

else if (ranNum3 > ranNum1 && ranNum3 > ranNum2 && ranNum3 > ranNum4 && ranNum2 > ranNum5) {
    console.log("Random number " + ranNum3 + " is greatest");
}

else if (ranNum4 > ranNum1 && ranNum4 > ranNum3 && ranNum4 > ranNum2 && ranNum4 > ranNum5) {
    console.log("Random number " + ranNum4 + " is greatest");
} 

else {
    console.log("Random number " + ranNum5 + " is greatest");
}

// for the smallest random number
if (ranNum1 < ranNum2 && ranNum1 < ranNum3  && ranNum1 < ranNum4 && ranNum1 < ranNum5) {
    console.log("Random number " + ranNum1 + " is smallest");
} 

else if (ranNum2 < ranNum1 && ranNum2 < ranNum3 && ranNum2 < ranNum4 && ranNum2 < ranNum5) {
    console.log("Random number " + ranNum2 + " is smallest");
}

else if (ranNum3 < ranNum1 && ranNum3 < ranNum2 && ranNum3 < ranNum4 && ranNum2 < ranNum5) {
    console.log("Random number " + ranNum3 + " is smallest");    
} 

else if (ranNum4 < ranNum1 && ranNum4 < ranNum3 && ranNum4 < ranNum2 && ranNum4 < ranNum5) {
    console.log("Random number " + ranNum4 + " is smallest");
}

else {
    console.log("Random number " + ranNum5 + " is smallest");
}
