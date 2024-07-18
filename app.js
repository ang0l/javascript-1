/**
 * Angol. 2024.07.18
 * Scope и this
 * Пример scope chain (99)
 */
'use strict';

let succesMessage = 'Успех';

const user = {
    name: 'Вася',
    roles: [],
}

function addRole(user, role) {
    if (role === 'admin') {
        const message = 'Ошибка';
        console.log(message);
        // console.log(a); // ошибка
        return user;
    }
    user.roles.push(role);

    let succesMessage = 'Ура';
    console.log(succesMessage);

    function logRoles() {
        // const a = 3; // обращение к a в блоке if
        console.log(user.roles);
    }
    logRoles();
    return user;
}

// console.log(addRole(user, 'dev'));
console.log(addRole(user, 'admgin'));
console.log(succesMessage); // Успех
// при объявлении (let, const) переменной внутри функции создается новая переменная
// в контектсе функции, котороя не имеет ничего общего с глобальной переменной.

