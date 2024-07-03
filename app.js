/**
 * Angol. 2024.07.03
 * Булева логика
 * Операторы с другими типами (28)
 */

// Выведет первый операнд если он true
console.log('Вася' || 'Олег'); // Вася
console.log(false || 'Олег'); // Олег
console.log('Вася' || false); // Вася
console.log(false || false); // false

// Выведет второй операнд если первый true
console.log('Вася' && 'Олег'); // Олег

// Веведет false если какой-нибудь операнд - false
console.log(false && 'Олег'); // false
console.log('Вася' && false); // false
console.log(false || false); // false

let a;
const userName = a || 'Петя';
// Т.к. переменная a не определена, то выведет 'Петя'
// если переменную a определить, то выведет значение переменной a
console.log(userName);

const isAdmin = true;
const fileName = isAdmin && 'file.mp4';
console.log(fileName);
