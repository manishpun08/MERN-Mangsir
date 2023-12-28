// rest operator => collets values into an array
// syntax => ...

// const calculateSum = (...otherValues) => {
//   let sum = 0;
//   otherValues.forEach((item, index, self) => {
//     sum = sum + item;
//   });
//   return sum;
// };
// const res = calculateSum(2, 3, 4, 22, 23, 43, 44);
// console.log(res);

//? default value
const getProduct = (num1, num2 = 1) => {
  let product = num1 * num2;

  return product;
};

const result = getProduct(4);
console.log(result);

const sayHello = (firstName = "New User") => {
  console.log(`Hello ${firstName}`);
};

sayHello("Manish");
