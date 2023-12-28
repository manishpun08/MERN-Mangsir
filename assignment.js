//1. Store your current age,name,college/workplace name into  variables.Output the result like “My name is Nischal and I am 20 years old. I am an IT student at broadway.”

let name = "Manish";
let age = 23;
let college = "LBEF";

console.log(
  `My name is ${name} and I am ${age} years old. I am an IT student at ${college} college.`
);

//2. Store the following into variables: number of children, partner's name, geographic location, job title.Output your fortune to the screen like so: "You will be an engineer in Kathmandu, and married to Asmita with 2 kids."

let numberOfChildern = 2;
let partnerName = "Asmita";
let jobTitle = "engineer";
let location = "Kathmandu";
console.log(
  `You will be an ${jobTitle} in ${location}, and married to ${partnerName} with ${numberOfChildern} kids.`
);
// 3.Store a radius into a variable. Calculate the circumference based on the radius.Circumference of circle = 2*Pi*r
let r = 4;
const Pi = 3.14;
console.log("Circumference of radius is " + 2 * Pi * r);

// 4.Write a JavaScript program to convert temperatures from celsius to fahrenheit. Formula:C = (5/9) * (F - 32)

var celsius = 25;
// Formula: C = (5/9) * (F - 32)
var fahrenheit = (celsius * 9) / 5 + 32;
console.log(
  celsius +
    " degrees Celsius is equal to " +
    fahrenheit +
    " degrees Fahrenheit."
);
// 5.Calculate expression:
// 3x-2y+2xy
// (x+y)2-1
// (x^3+y^2)/3
// x mod y
// Such that x =3 and y=2

let x = 3;
let y = 2;
let calculation1 = 3 * x - 2 * y + 2 * x * y;
let calculation2 = (3 + 2) * 2 - 1;
let calculation3 = (3 ^ (3 + 2) ^ 2) / 3;
let calculation4 = 3 % 2;

console.log(calculation1);
console.log(calculation2);
console.log(calculation3);
console.log(calculation4);
