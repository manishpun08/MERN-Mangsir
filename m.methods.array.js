// ? push => adds item to end of array
//syntax
// push(item)
// push(item1, item2,...itemN)

const carBrand = ["hyundai", "Tesla", "BYD", "Manish", "Pun", "Magar"];
// carBrand.push("Honda", "Toyota");
// console.log(carBrand);

//? pop => removes last element from array
// carBrand.pop();
// console.log(carBrand);

//? shift => removes first item form array
// carBrand.shift();
// console.log(carBrand);

//? unshift => adds items from start
// carBrand.unshift("BMW", "Suzuki");
// console.log(carBrand);

//? slice => tukra parne
// console.log(carBrand.slice(2));
// console.log(carBrand.slice(2, 4));

//?splice => remove or replace items
// syntax
// splice(start, deleteCount, item1)
// carBrand.splice(2, 1);
// carBrand.splice(2, 2, "Hello");
// console.log(carBrand);

//? for ..of for looping on array

// for (const items of carBrand) {
//   console.log(items);
// }

//? map
// returns new array
carBrand.map((item, index, array) => {
  console.log(item, index, array);
});
