

// const prices = [30000, 20000, 11000, 14000];

// function getMin(numbers) {
//     let min = numbers[0];
//     for (num of numbers) {
//         if (num < min) {
//             min = num;
//         }
//     }
//     return min;
// }
// const cheap = getMin(prices);
// console.log(cheap);



const phones = [
    { name: 'Sumsung', price: 20000, camera: '12mp', color: 'Black' },
    { name: 'Xoami', price: 20000, camera: '12mp', color: 'Black' },
         { name: 'Oppo', price: 20000, camera: '12mp', color: 'Black' },
       { name: 'Walton', price: 20000, camera: '12mp', color: 'Black' },
        { name: 'Sumsung', price: 20000, camera: '12mp', color: 'Black' },

]
function cheapestPhone(phones) {
    let min = phones[0];
    for (const phone of phones) {
        if (phone.price < min.price) {
            min = phone;
        }
    }
    return min;
}



const cheap = cheapestPhone(phones);
console.log(cheap)








