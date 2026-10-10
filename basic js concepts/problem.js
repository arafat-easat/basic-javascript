const min = Math.min(34, 45, 6, 3, 4, 1, -99, 67);
console.log(min)

const max = Math.max(34, 45, 6, 3, 4, 1, -99, 343);
console.log(max)
console.log(Math.PI)
console.log(Math.abs(5 - 10))
const rand = (Math.round(Math.random() * 10))
console.log(rand)

console.log('-date and time-')

const today = new Date();
const date = new Date(2043 - 10 - 12);
console.log(date.getMonth())
console.log(date.getDay())
const specificDate = new Date(2091, 0, 19);
console.log(specificDate)
specificDate.setMonth(10);
console.log(specificDate)
console.log(specificDate.toLocaleString('en-GB'))



