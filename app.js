/**
 * Angol. 2024.07.17
 * Как работает JS под капотом
 * Пример примитивов и объектов (96)
 */

const user = {
    name: 'Anton',
    id: 1,
    roles: ['Admin'],
};

// user.name = 'NewUser';
// console.log(user);

const newUser = Object.assign({}, user);
user.name = 'NewUser';
console.log(user); // {name: 'NewUser', id: 1}
console.log(newUser); // {name: 'Anton', id: 1}

const newUser2 = {
    ...user
};
newUser2.name = 'NewUser';
newUser2.roles.push('User');

console.log(user); // roles: ['Admin', 'User']
console.log(newUser); // roles: ['Admin', 'User']
