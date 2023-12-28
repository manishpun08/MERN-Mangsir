//? callBack function
//? function returning function
//? function which is passed as an argument to another function
// const getProduct = (x, y, func) => {
//   let product = x * y;
//   func();
//   return product;
// };
// const res = getProduct(5, 6, () => {
//   console.log("hello");
// });
// console.log(res);

// ?function returning function
// const calculateDivision = (x, y) => {
//perform division
//   const performDivision = () => {
//     const result = x / y;

//     return result;
//   };
//   return performDivision;
// };
// const res = calculateDivision(40, 5);
// const divideResult = res();

// const divideResult = calculateDivision(40, 5)();
// console.log(divideResult);

// const getSum = (x) => {
//   const doSum = (y) => {
//     const sum = x + y;

//     return sum;
//   };
//   return doSum;
// };

// const result = getSum(10);
// const res = result(5);
// console.log(res);

//? const getSum = (x) => (y) => x + y;

// ?const doSum = getSum(10);
// ?const sum = doSum(5);
// ?console.log(sum);

// => closure
// => function + lexical environment

let x = 10;
