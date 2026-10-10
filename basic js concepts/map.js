const numbers = [2, 4, 6, 7, 4, 67, 3]


// let temp = [];
// for (let index = 0; index < numbers.length; index++) {
// const element = numbers[index];
// const sum = element + 1;

// temp.push(sum)

// }
// console.log(temp)




const newArray = numbers.map(value => value + 1);
console.log(newArray)

const squareArray = numbers.map(element => element * element);
console.log(squareArray)