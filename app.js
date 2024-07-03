/**
 * Angol. 2024.07.03
 * Массивы
 * Знакомство с массивами
 */

// Переменные
const role1 = 'admin';
const role2 = 'user';
const role3 = 'supetuser';

// Массивы
const roles = ['admin', 'user', 'superuser'];
const userInfo = ['Аня', 25];

// Вывод массива и элемента масива
console.log(roles);
console.log(roles[0]);

// вывд последнего элемента массива
console.log(roles.length);
console.log(roles[roles.length - 1]);

// вывод элемента массива методом at
console.log(roles.at(0));
// вывод последнего элемента массива методом at
console.log(roles.at(-1));

const usersAge = [2040 - 2022, 20 - '6', 10 > 0 ? 5 : 0];
console.log(usersAge);

const userNames = new Array('Вася', 'Петя', 'Катя');
console.log(userNames);

function square(el) {
    return el * el;
}
console.log(square([1, 2, 3])); // NaN
