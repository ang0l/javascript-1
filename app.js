/**
 * Angol. 2024.07.22
 * Управление this
 * Bind (110)
 */

'use strict';

// Создайте объект пользователя с паролем
// С помощью функции ниже удалить пароль сделав
// фнкуцию сброса пароля

function removePassword(reset) {
    if (reset) {
        this.password = undefined;
    } else {
        this.password = 1;
    }
}

// Мое решение
const user = {
    name: 'Vasya',
    login: 'VP',
    password: 2,
};

console.log(user.password);

const remPass = removePassword;
remPass.call(user, true)

console.log(user.password);

// решение преподавателя

const user1 = {
    login: 'a@a.ru',
    password: '12345',
};

const resetUserPassword = removePassword.bind(user1, true);
resetUserPassword();
console.log(user1.password);
