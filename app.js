/**
 * Angol 2024.07.02
 * Основы
 * Преобразование типов (18)
 */

const age = '18';
// console.log(age + 5); // 185
console.log(Number(age) + 5); // 23
console.log(age - 3); // 15

const userName = 'Вася';
console.log(Number(userName) + 5); // NaN
console.log(typeof NaN); // number

console.log(String(4) + 7); // 47
console.log(Boolean(1)); // true (все числа, которые не являются нулю - true)
console.log(Boolean(0)); // false

console.log(Boolean('fdskl')); // true
console.log(Boolean('')); // false

console.log(Boolean('') + 10); // 10 (false - 0 плюс 10 равно 10)
console.log(true + 2); // 3 (true - 1 плюс 2 равно 3)

const a = 2 + '10'; // конкатенация = 210
console.log(a - 10); // 210 - 10 = 200
