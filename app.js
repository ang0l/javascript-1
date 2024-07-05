/**
 * Angol. 2024.07.05
 * Итерации в массивах
 * ForEach (58)
 */

const score = [5, 10, 0, 15];

// for (const[i, el] of score.entries()) { // Метод entries возвращает массив с индеком и значением элемента массива.
//     console.log(`Раунд ${i + 1}:  ${el}`);
// }

// score.forEach(function(el) {
//     console.log(`Раунд:  ${el}`);
// })
//
// вариант стрелочной функции
score.forEach((el, i) => { // аргументы: елемент, индекс
    console.log(`Раунд ${i + 1}:  ${el}`);
})
// особенностью метода forEach является то, что нельзя отменить итерирование break-ом.
