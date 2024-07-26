/**
 * Angol. 2024.07.24
 * Управление this
 * Замыкания (112)
 */

'use strict';

function changeBalance() {
    let balance = 0;
    let key = 'abc';
    return function(sum) {
        balance += sum;
        key = 'cba';
        console.log(`Баланс: ${balance}`);
    }
}

const change = changeBalance();

change(100); // 100
change(-50); // 50
change(200); // 250

console.dir(change);


const change2 = changeBalance();

change2(100); // 100

console.dir(change2);
