/**
 * Angol. 2024.07.10
 * Объекты
 * Обращение к элементам объекта (80)
 */

const user = {
    name: 'Вася',
    surname: 'Пупкин',
    age: 24,
    skills: [
        'Программирование',
        'Готовка'
    ],
    eduBasic: 'Школа 10',
    eduPro: 'МФТИ'
};

console.log(user); // {name: 'Вася', surname: 'Пупкин', age: 24, skills: Array(2), eduBasic: 'Школа 10', city: 'Москва'}
console.log(user.name); // Вася
console.log(user.skills[0]); // Программирование
console.log(user.skills); // ['Программирование', 'Готовка'] // обращение не доступно для расчетных свойств
console.log(user['skills']) // ['Программирование', 'Готовка'] // обращение доступно для расчетных свойств

// допустим:
const level = 'Pro';
console.log(user['edu' + level]); // МФТИ

// если свойство не расчетное или не известно, расчетное или нет, лучше использовать точку

const res = prompt('Введите свойство');
console.log(user[res]); // значение свойства. Если такого свойтва нет свойства, то - undefined

user['city'] = 'Москва'; // создали новое свойвтво

user.age = 30;
user['age'] = 30;
console.log(user);