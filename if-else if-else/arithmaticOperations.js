const ps = require("prompt-sync");
const prompt = ps();

let a = prompt("Enter the first digit: ");
a = Number(a);

let b = prompt("Enter the second digit: ");
b = Number(b);

let c = prompt("Enter the third digit: ");
c = Number(c);

let d = 0;
let e = 0;
let f = 0;
let g = 0

//arithmatic operations
d = a + b * c;
e = c + (a / b);
f = a % b + c;
g = a * b + c;

//output of arithmatic operations
console.log("a+b*c is: " + d);
console.log("c+(a/b) is: " + e);
console.log("a%b+c is:  " + f);
console.log("a*b+c is: " + g);

//for the smallest value
if (d<e && d<f && d<g)
{
    console.log("a+b*c= "+d+" is the smallest value");
}
else if (e<d && e<f && e<g)
{
    console.log("c+(a/b)= "+e+" is the smallest value");
}
else if (f<e && f<d &&f<g)
{
    console.log("a%b+c= "+e+" is the smallest value");
}
else
{
    console.log("a*b+c="+f+" is the smallest value");
}

//for the greatest number
if (d>e && d>f && d>g)
{
    console.log("a+b*c= "+d+" is the greatest value");
}
else if (e>d && e>f && e>g)
{
    console.log("c+(a/b)= "+e+" is the greatest value");
}
else if (f>e && f>d && f>g)
{
    console.log("a%b+c= "+f+" is the greatest value");
}
else
{
    console.log("a*b+c= "+g+" is the greatest value");
}







