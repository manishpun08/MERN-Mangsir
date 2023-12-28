// array map
// to change element

// let price = [100, 250, 100, 500, 450];
// const newPriceList = price.map((item, index, array) => {
//   let newPrice = item - 10;
//   return newPrice;
// });

// console.log(newPriceList);

// let scores = [400, 450, 777, 521, 666, 232];
// every score must be updated by 10 % and return new score
// const newScoreList = scores.map((item, index, array) => {
//   let newScore = item * 1.1;
//   return newScore;
// });

// console.log(newScoreList);

// let numList = [21, 72, 51, 6, 4, 30, 11, 17, 13, 16];
// if number is even, add 5 in it
// if number is odd,  subtract 3 on it

// const newNumList = numList.map((item, index, array) => {
//   let remainder = item % 2;
//   let newItem;
//   if (remainder === 0) {
//     newItem = item + 5;
//   } else {
//     newItem = item - 3;
//   }
//   return newItem;
// });
// console.log(newNumList);

// const countryNames = ["Nepal", "BanglaDesh", "PaKistan", "BhutaN", "MongoLia"];
// convert country names to lowercase
// const newCounttryList = countryNames.map((item, index, array) => {
//   console.log(item.toLowerCase());
//   let newItem = item.toLowerCase();

//   return newItem;
// });
// console.log(newCounttryList);

let laptopList = [
  {
    name: "TUF F15",
    brand: "asus",
    price: 1044,
  },
  {
    name: "GF63",
    brand: "msi",
    price: 900,
  },
  {
    name: "macbook air m2",
    brand: "apple",
    price: 1400,
  },
  {
    name: "nitro",
    brand: "acer",
    price: 800,
  },

  {
    name: "inspiron 55",
    brand: "dell",
    price: 700,
  },
];

// ? due to sudden rise in tax, add 7% to the price of each laptop

const newPriceList = laptopList.map((item, index, array) => {
  // console.log(item.price);
  let laptopPrice = item.price + item.price * 1.07;
  return {
    ...item,
    price: laptopPrice,
  };
});

console.log(newPriceList);
