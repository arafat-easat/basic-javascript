

// function getMax(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     }
//     else {
//         return num2;
//     }
// }
// const max = getMax(55, 32);
// console.log('max of two is :', max);


const jim = 34;
const tim = 32;
const kim = 45;

if (jim > tim && jim > kim) {
    console.log('KIM is ultimate boro')
}
else if (tim > jim && tim > kim) {
    console.log('TIM is ultimate boro')
}
else {
    console.log('KIM is ultiamte boro')
}


// const max = Math.max(12, 34, 56, 6)
// console.log(max)


const heights = [60, 62, 68, 82, 78];

function getMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
const max = getMax(heights);
console.log('max value is:',max)