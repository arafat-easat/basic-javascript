function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}
function calculator(a, b, operation) {
    if (operation === 'add') {
        const result = add(a, b);
        return result;
    }
    else if (operation === 'subtract') {
        const result = subtract(a, b);
        return result;
    }
    else if (operation === 'multiply') {
        const result = multiply(a, b);
        return result;

    }
    else if (operation === 'divide') {
        const result = divide(a, b);
        return result;
    }
    else {
        return "only 'add' ,'subtract' ,'multiply', 'divide' operation is allowed"
    }

}

const result = calculator(5, 7, 'subtract');
console.log(result);


function fullName(first, second) {
    if (typeof first !== 'string') {
        return 'first name should be a string'
    }
    else if (typeof second !== 'string') {
        return 'second name should be a string'
    }
    const full = first + '' + second;
    return full;
}
const full = fullName('akmal', 'ali')
console.log(full)