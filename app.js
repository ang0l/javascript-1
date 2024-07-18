/**
 * Angol. 2024.07.18
 * Scope и this
 * Пример использования this (103)
 */

'use strict';

console.log(window); // Window
console.log(this); // Window

function addNum(num1, num2) {
    console.log(this);
    return num1 + num2;
}
addNum(); // undefined

const addNum2 = (num1, num2) => {
    console.log(this);
    return num1 + num2;
}
addNum2(); // Window

const user = {
    name: 'Вася',
    surname: 'Пупкин',
    getFulName: function() {
        console.log(this);
        return this.name + ' ' + this.surname;
    }
}
user.getFulName(); // {name: 'Вася', surname: 'Пупкин', getFulName: ƒ}

const user2 = {
    name: 'Марина',
    surname: 'Катц',
}
user2.getFulName = user.getFulName;
user2.getFulName(); // {name: 'Марина', surname: 'Катц', getFulName: ƒ}

const getFulName = user2.getFulName;
getFulName(); // undefined и ошибка о невозможности прочитать свойства name и surname
