/**
 * Angol. 2024.07.05
 * Итерации в массивах
 * Reduce (64)
 */
const operations = [100, -20, 7, -30, 50];

// как обычно - процедурный стиль
let balance = 0;
for (const operation of operations) {
    balance += operation;
}
console.log(balance);

// функциональный стиль
const finalBalans = operations.reduce((acc, operation, i) => {
    // для подробного представления веведем все агрументы
    console.log(`Итерация ${i}, acc ${acc}, operation ${operation}`);
    return acc += operation; // аккумулятор увеличили на operation
}, 0); // задаем начало аккумулятора в нулевой итерации
// как работает:
// 0 итерация - acc = то что зададим - 0, operation = 100
// 1 итерация - acc = то что мы вернем - 100, operation = -20
// ...
console.log(finalBalans);

// получим минимальны элемент массива
const minEl = operations.reduce((acc, operation, i) => {
    if (operation > acc) {
        return acc;
    } else {
        return operation;
    }
}, 0);
// т.к. аккумулятор (acc) не преобразуется (как в прошлом примере с operation),
// то он просто хранит предыдущее значение,
// а далее сравнивается с текущим значением
// и при необходимости изменяется до минимального.
console .log(minEl);
