//WAF which takes mass and acceleration as input and return force
//? F=m*a

// const calculateForce = (mass, acceleraion) => mass * acceleraion;

// const force = calculateForce(100, 10);
// console.log(force);

//WAF which receives force and area an input and return pressure
//? P=F/A
// const getPressure = (force, area) => {
//   let pressure = force / area;
//   return pressure;
// };
// const pressure = getPressure(1000, 10);
// console.log(pressure);

// WAF that calculate price of well furnished house
//? total price = price per square * area

// const priceHouse = (pricePerSquare, area) => {
//   let totalPrice = pricePerSquare * area;
//   return totalPrice;
// };
// const totalPrice = priceHouse(200, 100);
// console.log(totalPrice);

//? WAF that finds all even numbers between 100 to 250
const evenNumber = () => {
  for (let i = 100; i <= 250; i = i + 1) {
    let remainder = i % 2;
    if (remainder === 0) {
    } else {
      console.log(i);
    }
  }
};
evenNumber();
