const products = [
    { name: 'shampoo', price: 200 },
    { name: 'chirunu', price: 300 },
    { name: 'pant', price: 400 },

]

function getShooppingTotal(products) {
    let total = 0;
    for (const product of products) {
        total = total + product.price;
    }
    return total;
}
const total = getShooppingTotal(products);
console.log(total)