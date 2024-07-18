/**
 * Angol. 2024.07.18
 * Scope и this
 * Arguments (105)
 */

'use strict';

// Контекст состоит из трех составляющих:
//
// let, var, const, func, arguments
// Scope chain
// this

function sumNum(num1, num2) {
    console.log(this); // undefined
    console.log(arguments); // аргументы нашей функции
    console.log(arguments[0]); // 1
    return num1 + num2;
}

console.log(sumNum(1, 4)); // 5
console.log(sumNum(1, 4, 3, 7)); // 5

const sumNumArr = (num1, num2) => {
    console.log(this); // Window
    console.log(arguments); // аргументы совершенно неопределены
    return num1 + num2;
}
console.log(sumNumArr(1, 4, 3, 7)); // Ошибка неопределения аргументов
