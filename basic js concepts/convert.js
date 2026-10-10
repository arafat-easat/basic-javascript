function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;

}
const shuvoHeight = inchToFeet(75);
console.log(shuvoHeight)



function feetToInch(feet) {
    const inch = feet * 12;
    return inch;
}
const arafatHeight = feetToInch(5.6);
console.log(arafatHeight);



function mileToKilometre(mile) {
    const kilo = mile * 1.60934;
    return kilo;
}
const roadKilo = mileToKilometre(8);
console.log(roadKilo)


console.log('-Leap Year-')
function isLeapYear(year) {
    if

        (year % 100 !== 0 && year % 4 === 0){
        return true;}
    else if (year % 100 === 0 && year % 400 === 0)
        {return true;}
    else {
        return false;
    }
}
const leap = isLeapYear(2027);
console.log(leap)