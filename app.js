/**
 * Angol. 2024.07.05
 * Функции высшего порядка
 * Callback (57)
 */

// функциb первого класса
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function power(a, b) {
    return a ** b;
}

// функция высшего порядка
function calculate(a, b, fn) {
    console.log(fn.name); // выводим имя функции
    const res = fn(a, b);
    return res;
}

let res = calculate(3, 5, add);
console.log(res);

res = calculate(3, 5, subtract);
console.log(res);

res = calculate(3, 5, power);
console.log(res);