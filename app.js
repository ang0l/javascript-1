/**
 * Angol. 2024.07.20
 * Управление this
 * EOL для методов (108)
 */

'use strict';

// небольшое напоминание
// const b = 1;
// const a = {
//     b
// }

// console.log(a); // {b: 1}

const b = 1;
const a = {
    b,
    getB: function() {
        return this.b;
    },

    // следующая запись метода (getBAlt) делает абсолютно тоже, что и метод getB
    // в объектах лучше методы писать именно так
    // в классах методы пишутся так же:
    getBAlt() {
        return this.b;
    }
}

console.log(a.getB()); // 1
console.log(a.getBAlt()); // 1
