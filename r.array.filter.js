let laptopList = [
  {
    name: "TUF F15",
    brand: "asus",
    price: 1044,
  },
  {
    name: "TUF F17",
    brand: "asus",
    price: 1400,
  },
  {
    name: "GF63",
    brand: "msi",
    price: 900,
  },

  {
    name: "macbook pro m3",
    brand: "apple",
    price: 1999,
  },
  {
    name: "nitro",
    brand: "acer",
    price: 800,
  },
  {
    name: "helios 300",
    brand: "acer",
    price: 1245,
  },

  {
    name: "inspiron 55",
    brand: "dell",
    price: 700,
  },
];

// ?remove apple laptops from the array
// const newLaptopList = laptopList.filter((item, index, array) => {
//   if (item.brand !== "apple") {
//     return item;
//   }
// });
// console.log(newLaptopList);
// ?decrease price of asus  laptops by 15 percent
// const decreasedPriceList = laptopList.map((item, index, array) => {
//   if (item.brand === "asus") {
//     let newPrice = item.price - (15 / 100) * item.price;
//     return { ...item, price: newPrice };
//   }
//   return item;
// });
// console.log(decreasedPriceList);

//? change acer brand to "acerT"
// const newLaptopList = laptopList.map((item, index, array) => {
//   if (item.brand === "acer") {
//     return { ...item, brand: "acerT" };
//   }
//   return { ...item };
// });
// console.log(newLaptopList);
