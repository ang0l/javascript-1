/**
 * Angol. 2024.07.11
 * Объекты
 * Упражнение - преобразование объектов (82)
 */

// Преобразовать пользователей до вида
// { fullName: 'Вася Пупкин', skillNum: 2 }

const users = [
    {
        name: 'Вася',
        surname: 'Пупкин',
        age: 30,
        skills: ['Разраотка', 'DevOps']
    },
    {
        name: 'Катя',
        surname: 'Белова',
        age: 18,
        skills: ['Дизайн']
    },
];

// Мое решение:
const usersMod = users.map((obj) => {
    return {
        fullName: `${obj.name} ${obj.surname}`,
        skillNum: obj.skills.length
    }
});
console.log(usersMod);

// Решение преподавателя
const userData = users.map(user => {
    return {
        fullName: `${user.name} ${user.surname}`,
        skillNum: user.skills.length
    }
});
console.log(userData);

// название переменных...
