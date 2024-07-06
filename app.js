/**
 * Angol. 2024.07.06
 * Итерации в массивах
 * Упражнение - Реализация Some (66)
 */

const arr = [2, 4, 4, 10, 20];

// Мое решение в 2 вариантах
// Функция на цикле
function someOnCycle(arr, arrEl) {
    res = false;
    for (const el of arr) {
        if (el === arrEl) {
            res = true;
        }
    }
    return res;
}
console.log(someOnCycle(arr, 4));

// Функция на findIndex
function someOnFindIndex(arr, arrEl) {
    return arr.findIndex(el => el === arrEl) > -1;
}
console.log(someOnFindIndex(arr, 5));

// Решение преподавателя
function some(array, element) {
    const res = array.find(el => el === element);
    return res == undefined ? false : true;
}
console.log(some(arr, 22));

// а теперь
// реализованный метод some в JS
console.log(arr.some(el => el === 4));
