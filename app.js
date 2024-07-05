/**
 * Angol. 2024.07.05
 * Циклы
 * Упражнение - Расчет итогвого баланса (55)
 */

// Есть выгрузка операций пользователя
// const operations = [1000, -700, 300, -500, 10000];
// а так же начальный баланс в $100
// Необходимо сделать функции расчета:
// - Итогвого баланса
// - Наличия отрицательного баланса (если после очередной операции
//     баланс < 0, то выдавать false)
// - Расчета среднего расхода и среднего дохода

const operations = [1000, -700, 300, -500, 10000];

// // Мое решение:
// const beginBalance = 100;

// function total(begin, operations) {
//     let balance = begin;
//     for (let operation of operations) {
//         balance += operation;
//     }
//     return balance;
// }

// function negativeBalance (begin, operations) {
//     let balance = begin;
//     for (let operation of operations) {
//         balance += operation;
//         if (balance < 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function average(operations) {
//     let quantitPuls = 0;
//     let quantitMinus = 0;
//     let balancePlus = 0;
//     let balanceMinus = 0;

//     for (let operation of operations) {
//         if (operation > 0) {
//             balancePlus += operation;
//             quantitPuls++;
//         } else if (operation < 0) {
//             balanceMinus += operation;
//             quantitMinus++;
//         }
//     }
//     console.log(balancePlus /= quantitPuls);
//     console.log(balanceMinus /= quantitMinus);
// }

// console.log(total(beginBalance, operations));
// console.log(negativeBalance(beginBalance, operations));
// average(operations);

// Решение преподавателя:
const startingBalance = 100;

// Эта функция такая же как у меня.
function getBalance(arrayOfOperations, initialBalance) {
    let balance = initialBalance;
    for (const element of arrayOfOperations) {
        balance += element;
    }
    return balance;
}
console.log(getBalance(operations, startingBalance));

// Эта функция отличается от моей наличием переменной isOk и выходом из цикла с помощью break.
function checkOperations(arrayOfOperations, initialBalance) {
    let balance = initialBalance;
    let isOk = true;
    for (const element of arrayOfOperations) {
        balance += element;
        if (balance < 0) {
            isOk = false;
            break;
        }
    }
    return isOk;
}
console.log(checkOperations(operations, startingBalance));

// Эта функция отличается от моей возвратом массива.
// у меня была такая мысль, но вывел данные в самой функции.
function averageOperations(arrayOfOperations) {
    let positiveCount = 0;
    let negativeCount = 0;
    let positiveSum = 0;
    let negativeSum = 0;

    for (const element of arrayOfOperations) {
        if (element > 0 ) {
            positiveCount++;
            positiveSum += element;
        }
        if (element < 0 ) {
            negativeCount++;
            negativeSum += element;
        }
    }
    return [positiveSum / positiveCount, negativeSum / negativeCount];
}
console.log(averageOperations(operations));

// далее будем учить и писать такие конструкции более красивее и короче.
