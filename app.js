/**
 * Angol. 2024.07.05
 * Итерации в массивах
 * Map (61)
 */

// const score = [5, 10, 0, 15];

// // for (const[i, el] of score.entries()) { // Метод entries возвращает массив с индеком и значением элемента массива.
// //     console.log(`Раунд ${i + 1}:  ${el}`);
// // }

// score.forEach((scoreEl, i) => { // есть еще третий аргумент, который является самим исходным массивом.
//     console.log(`Раунд ${i + 1}:  ${scoreEl}`);
// })

const transactionInUSD = [10, -7, 50, -10, 100];

// конвертация USD в RUB

// процедурный стиль:
const transactionInRUB = [];
for (const transaction of transactionInUSD) {
    transactionInRUB.push(transaction * 60);
}
console.log(transactionInUSD);
console.log(transactionInRUB);

// функциональный стиль:
const transactionInRUB2 = transactionInUSD.map((transaction) => transaction * 60);
console.log(transactionInUSD);
console.log(transactionInRUB2);
