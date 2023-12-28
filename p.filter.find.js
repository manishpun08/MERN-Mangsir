// filter => to filter out certain values based upon condition
// return new array
// and there is greater possibility of change in size of returned array

// let numList = [1, -1, 55, -71, 60, -32, 11, -45];
// const newList = numList.filter((item, index, array) => {
//   return item > 0;
// });
// console.log(newList);

const scoreList = [25, 11, 39, 72, 55, 63, 8, 15, 24, 27, 32, 31];
// passed score=> scores greater than or equals to 32
const newScoreList = scoreList.filter((item, index, array) => {
  return item >= 32;
});

console.log(newScoreList);
