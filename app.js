/**
 * Angol. 2024.07.03
 * Функции
 * Упражнение - Упрощение функции (34)
 */

// Переписать функцию в стрелочную
function toPower(num, power) {
    const res = num ** power;
    return res;
}
console.log(toPower(2, 3));

// Мое решение. Совпадает с решением Преподавателя
const toPowerArrow = (num, power) => num ** power;
console.log(toPowerArrow(2, 4));
