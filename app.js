/**
 * Angol. 2024.07.03
 * Массивы
 * Slice, splice, concat, reverse (42)
 */

const roles = ['user', 'admin', 'manager', 'superuser'];

// Slice
const res = roles.slice(2); // исходный массив не модифицрует
// отрезает кусок начиная с указанного элемента до конца массива
console.log(res);

const res2 = roles.slice(2, 3); // отрезает кусок массива начиная с элемента в первом аргументе по элемент во втором элементе, но не включая его
console.log(res2);

const res3 = roles.slice(-1);
const res4 = roles[roles.length - 1] // отрезает кусок массива начиная с конца массива в обратном направлении
console.log(res3);
console.log(res4);

const res5 = roles.slice(1, -2); // отрезает кусок массива начиная с элемента в первом аргументе по элемент во втором элементе с конца массива, но не включая его
console.log(res5);
console.log(roles); // исходный код не можифицирован.

// Splice
// const res6 = roles.splice(2);
// console.log(res6);
// console.log(roles); // исходный код можифицирован. Обрезан! Вырезаны указанные в splice элементы.

// const res6 = roles.splice(2, 2); // выбирает из исходного массива элементы начиная с индекса 2, 2 элемента
// console.log(res6);
// console.log(roles); // исходный код можифицирован. Обрезан! Вырезаны указанные в splice элементы.

// const res6 = roles.splice(-1); // выбирает из исходного массива элементы начиная с конца массива
// console.log(res6);
// console.log(roles); // исходный код можифицирован. Обрезан! Вырезаны указанные в splice элементы.

const res8 = roles.reverse(); // переворачивает массивы
console.log(res8);
console.log(roles); // модифицирует исходный массив

const newRoles = ['sysadmin', 'developer'];
const res9 = roles.concat(newRoles);
console.log(res9);
console.log(roles); // исходный массив не модифицирован.
