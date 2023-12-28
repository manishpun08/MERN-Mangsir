//? numeric sort
// scores = [1, 2, 30, 100, 11, 59, 33];
// ascending sort
// scores.sort((a, b) => {
//   return a - b;
// });
// descending sort
// scores.sort((a, b) => {
//   return b - a;
// });
// console.log(scores);

// const laptopList = [
//   {
//     name: "TUF F15",
//     brand: "asus",
//     price: 1044,
//   },
//   {
//     name: "TUF F17",
//     brand: "asus",
//     price: 1400,
//   },
//   {
//     name: "GF63",
//     brand: "msi",
//     price: 900,
//   },

//   {
//     name: "macbook pro m3",
//     brand: "apple",
//     price: 1999,
//   },
//   {
//     name: "nitro",
//     brand: "acer",
//     price: 800,
//   },
//   {
//     name: "helios 300",
//     brand: "acer",
//     price: 1245,
//   },

//   {
//     name: "inspiron 55",
//     brand: "dell",
//     price: 700,
//   },
// ];

// laptopList.sort((a, b) => {
//   return a.price - b.price;
// });
// console.log(laptopList);

// const age = [122, 18, 22, 121, 32];
// const res = age.some((item) => {
//   return item >= 18;
// });
// const res = age.every((item) => {
//   return item >= 18;
// });
// console.log(res);

let scores = [32, 56, 77, 68, 43, 38];
// calculate total Score
// let sum = 0;
// scores.forEach((item) => {
//   sum = sum + item;
// });
// console.log(sum);

const result = scores.reduce((sum, item) => {
  sum = sum + item;
  return sum;
}, 0);
console.log(result);
