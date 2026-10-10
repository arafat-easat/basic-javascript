/**
 * chair --> 3cft
 * table --> 10cft
 * bed --> 50cft
 */

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}
const wood = woodQuantity(3, 4, 1);
console.log(wood)


/**
 * shirt price --> 300
 * pant price --> 500
 * shoe price --> 900
 */

function totalPrice(shirtPrice, pantPrice, shoePrice) {
    const shirt = 2;
    const pant = 2;
    const shoe = 2;

    const shirtTotalPrice = shirtPrice * shirt;
    const pantTotalPrice = pantPrice * pant;
    const shoeTotalPrice = shoePrice * shoe;

    const total = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
    return total;
}

const allPrice = totalPrice(300, 500, 900);
console.log(allPrice)


