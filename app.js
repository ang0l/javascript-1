/**
 * Angol. 2024.07.03
 * Функции
 * Упражнение - Кредит на MacBook
 */

// Пользователь:
// - Возраст
// - Наличие работы
// - Деньги
// Нужно проверить может ли он купить новый MacBook за 2000$?
// Он может брать не только свои деньги, но и взять кредит.
// Ему дадут 500$, только если ему больше 24-х лет и он
// имеет работу, 100$ если ему просто больше 24-х лет и 0 в
// ином случае.
// Напишите функцию, которая принимает данные пользователя
// и товара и возвращает true или false;

// // Мое решение
// let age = 24;
// let isWork = true;
// let cach = 2200;
// const priceMacBook = 2000;

// function creditOnMacBook(age, work) {
//     if (age > 24 && work) {
//         return 500;
//     } else if (age > 24) {
//         return 100;
//     }
//     return 0;
// }

// function canBuyMacBook (age, work, cach, priceMacBook) {

//     let cachAndCredit = cach + creditOnMacBook(age, work);
//     // console.log(cachAndCredit);

//     if (priceMacBook <= cachAndCredit) {
//         return true;
//     }
//     return false;

// }
// console.log(canBuyMacBook(age, isWork, cach, priceMacBook));

// Решение преподавателя.
function computeCredit(age, hasJob = false) {
    switch (true) {
        case age > 24 && hasJob:
            return 500;
        case age > 24:
            return 100;
        default:
            return 0;
    }
}

// агрументы по умольчанию необходимо устанавливать в конце
// иначе не работает и нет, соответственно, смысла
// function canBuy(productPrice, age, hasJob = false, money) {
function canBuy(productPrice, age, money, hasJob = false) {
    const creditMoney = computeCredit(age, hasJob);
    return productPrice <= money + creditMoney;
}
console.log(canBuy(2000, 25, 1900, false));

// почти тоже самое, но у преподавателя более красивее
