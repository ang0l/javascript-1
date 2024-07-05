/**
 * Angol. 2024.07.05
 * Функции высшего порядка
 * Упражнение - Стрелочные функции (58)
 */

// function power(pow) {
//     return function (num) {
//         return num ** pow;
//     }
// }

// Переписал вышенаписанную функцию в стрелочную функцию:
const power = pow => num => num ** pow;

const powerOfTwo = power(2);
console.log(powerOfTwo(5));
console.log(powerOfTwo(10));

const powerOfTree = power(3);
console.log(powerOfTree(5));

console.log(power(5)(4));

