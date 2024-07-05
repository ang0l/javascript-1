/**
 * Angol. 2024.07.05
 * Итерации в массивах
 * Find и FindIndx (66)
 */

// поиск по массиву

const arr = [2, 4, 4, 10, 20];

// найти первый элемент больше 5
// процедурный стиль (цыклы)
let elGT5;
for (const el of arr) {
    if (el > 5) {
        elGT5 = el;
        break;
    }
}
console.log(elGT5); // 10

// функциональный стиль
// find
elGT5 = arr.find(el => el > 5);
console.log(elGT5); // 10

// findIndex
elGT5Index = arr.findIndex(el => el > 5);
elGT5IndexNeg = arr.findIndex(el => el < 0);
console.log(elGT5Index); // 3
console.log(elGT5IndexNeg); // -1 (элемент не найден)
