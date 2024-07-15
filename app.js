/**
 * Angol. 2024.07.12
 * Объекты
 * Деструктуризация и rest (87)
 */

// вспомним деструктуризацию массива.
// деструктуризация массива позволяет разбить массив на отдельные переменные
const arr = [1, 2, 3];
const [z, y, x] = arr;
console.log(z); // 1
console.log(y); // 2
console.log(x); // 3

// объекты
let user = {
    name: 'Вася',
    age: 40,
    city: 'Москва'
};

// const {age, name} = user;
// console.log(age); // 40
// console.log(name); // Вася

const {age, ...userWithouAge} = user;
// возраст вытащили в одну переменную,
// остальное в другой объект (rest)
// можно оставить только, например, возраст, а все остальное не брать
// const {age};
console.log(userWithouAge);

const additionalData = {
    skills: ['Разработка', 'Дизайн'],
    creditCard: '1234-4567-9876-1234'
};

// user.skills = additionalData.skills;
// user.creditCard = additionalData.creditCard;
// воспользщуемся спред оператором

user = {
    ...user, // взять все свойства и переместить их в отдельную переменную
    ...additionalData // взять все свойства и переместить их в отдельную переменную
};
console.log(user);
