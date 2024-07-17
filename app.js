/**
 * Angol. 2024.07.16
 * Как работает JS под капотом
 * Примитивы и объекты (95)
 */

'use strict';

let firstName = 'Антон';
let firstName2 = firstName;
firstName2 = 'New';

console.log(firstName); // Антон
console.log(firstName2); // New

const user1 = {
    name: 'Антон',
};

const user2 = user1;
user2.name = 'New';

console.log(user1); // New
console.log(user2); // New
