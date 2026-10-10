function brushTeeth() {
    console.log('pick up the brush');
    console.log('add paste');
    console.log('2 min goso')
}

brushTeeth();

console.log('-------------')

function square(number) {

    const borgo = number * number;
    console.log('square of the given number is:', borgo)

}
square(4)



function add(num1, num2) {
    const sum = num1 + num2
    console.log(sum)
}
add(23, 2)

console.log('----------')

function difference(num1, num2) {
    const diff = num1 - num2;
    console.log(diff)
}
const fatherAge = 45;
const myAge = 20;
difference(fatherAge, myAge)

console.log('---------')

function doMath(num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const div = multiply / 2;
    return div;

}

const result = doMath(10, 5);
console.log(result)



function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

// console.log(isEven(5)
// );
// console.log(isEven(10))


function isOdd(number){
    if(number % 2 === 1){
        return true;
    }
    return false;
}
console.log(isOdd(3))






