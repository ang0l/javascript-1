/**
 * Angol. 2024.07.03
 * Функции
 * Функции в функциях (37)
 */

const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calculateW(present) {
    return present * KG_IN_USD;
}

function calculateKM(distance) {
    return distance * KM_IN_USD;
}

function getExhangePrice(present1, present2, distance) {
    // Расчет без дополнительных функций
    // const price1 = present1 * KG_IN_USD;
    // const price2 = present2 * KG_IN_USD;
    // const distancePrice = distance * KM_IN_UDS;
    const price1 = calculateW(present1);
    const price2 = calculateW(present2);
    const distancePrice = calculateKM(distance);
    return price1 + price2 + distancePrice;
}
console.log(getExhangePrice(1, 2, 10));
