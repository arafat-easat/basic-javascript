function evenSizedString(str) {
    const size = str.length;
    console.log(str, size);
    if (size % 2 === 0) {
        console.log('even size')
        return true;
    }
    else {
        console.log('odd size')
        return false;
    }

}
// evenSizedString('Dhaka',)
// evenSizedString('faka')


function doubleOrTriple(number, doDouble) {
    if (doDouble === true) {
        const result = number * 2
        return true;
    }
    else {
        result = number * 3
        return result;
    }
}
console.log(doubleOrTriple(5, true))
console.log(doubleOrTriple(5, false))





function evenNumbersOnly(number) {
    const evens = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            evens.push(number)
        }
    }
    return evens;
}

const numbers = [2, 41, 4, 6, 7, 8, 43, 3, 1];
// const evens = evenNumbersOnly(numbers);
// console.log('even numbers are', evens)

console.log('-----------')

function sumOfEvenNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}

const sum = sumOfEvenNumbers(numbers);
console.log('some of even number is ',sum)
