let a = 2;
let b = -3;
let c = 5;
let d = 20;
let e = 9;
// a+b<c OR d*a>=c

let condition1 = a + b < c;
let condition2 = d * a >= c;
console.log(condition1 || condition2);

// (a**c===d AND d===e+a-1)  ORd%e!==1
let condition3 = a ** c === d;
let condition4 = d === e + a - 1;
let condition5 = d % e !== 1;
console.log((condition3 && condition4) || condition5);

// 2^a+b>d OR c-d>b
let condition6 = 2 ** a + b > d;
let condition7 = c - d > b;
console.log(condition6 || condition7);
