/**
 * Angol. 2024.07.05
 * Итерации в массивах
 * Filter (62)
 */

const operations = [100, -20, 7, -20, 50];

// процедурный стиль
// const positiveOpreations = [];
// for (const operation of operations) {
//     if (operation > 0) {
//         positiveOpreations.push(operation);
//     }
// }
// console.log(positiveOpreations);

// функциональный стиль:
// выводим приходные операции
const positiveOpreations = operations.filter(operation => operation > 0);
console.log(positiveOpreations);

// последовательное применение методов:
// выводим приходные операции и конвертируем в рубли
const positiveRUBOpreations = operations
    .filter(operation => operation > 0)
    .map(operation => operation * 60);
console.log(positiveRUBOpreations);
