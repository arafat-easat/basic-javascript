const products = [
    { id: 1, name: 'sumsung', color: 'black', price: 120 },
    { id: 2, name: 'xiomi', color: 'black', price: 120 },
    { id: 3, name: 'apple', color: 'black', price: 120 },
    { id: 4, name: 'sumsumg', color: 'gold', price: 120 },
    { id: 5, name: 'apple', color: 'gold', price: 120 }
]

// products.forEach(products => {
//     if(products.color === 'gold'){
//         console.log(products)
//     }
// })


const product = products.find(p => p.color === 'black');
console.log(product)