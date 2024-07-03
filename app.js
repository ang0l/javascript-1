/**
 * Angol. 2024.07.03
 * Функции
 * Введение в функции (31)
 */

function logName() {
    console.log(`Мое имя - Андрей`);
}

const a = logName();
console.log(typeof a); // undefined

function logNameF(name, surName) {
    console.log(`Мое имя - ${name} ${surName}`);
}

logNameF('Андрей', 'Головушкин');

// Расчет депозита
// function countDepositSum(depositInUSD, month, rate) {
//     const sum = depositInUSD * (1 + rate / 12) ** month;
//     return sum;
// }
// Укоротим функцию
function countDepositSum(depositInUSD, month, rate) {
    return depositInUSD * (1 + rate / 12) ** month;
}

const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1);

console.log(countDepositSum(1000, 48, 0.1));
