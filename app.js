/**
 * Angol. 2024.07.05
 * Итерации в массивах
 * Упражнение - Среднее значение (65)
 */

// Найдите среднее значение последовательность
// чисел с помощью redue

const arr = [1, 4, 4, 10];

// Мое решение?:
const myAvg = arr.reduce((acc, arrEl, i) => {
    // проверяю индекс на последний
    if (i === arr.length - 1) {
        // индекс последний - вычисляю среднее значение
        return (acc + arrEl) / (i + 1);
    } else {
        // индекс не последний - складываю данные и возвращаю аккумулятор
        return acc + arrEl;
    }
}, 0);
console.log(myAvg);

// Решение преподавателя:
const avg = arr.reduce((acc, el, i) => {
    if (i !== arr.length - 1) {
        return acc + el;
    } else {
        return (acc + el) / arr.length;
    }
}, 0);
console.log(avg);
