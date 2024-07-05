/**
 * Angol. 2024.07.05
 * Функции высшего порядка
 * Возврат функций (58)
 */

function power(pow) {
    return function (num) {
        return num ** pow;
    }
}

const powerOfTwo = power(2);
console.log(powerOfTwo(5));
console.log(powerOfTwo(10));

const powerOfTree = power(3);
console.log(powerOfTree(5));

console.log(power(5)(4));
