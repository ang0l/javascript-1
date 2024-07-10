/**
 * Angol. 2024.07.10
 * Работа со строками
 * Строки и массивы (76)
 */

const userFullName = 'Вася Пупкин Васильевич';
// метод split разделяет строку в элементы массива
console.log(userFullName.split(' ')); // ['Вася', 'Пупкин', 'Васильевич']

// разделяем строку в список переменных
const [firstName, familyName, lastName] = userFullName.split(' ');
console.log(firstName); // Вася
console.log(familyName); // Пупкин
console.log(lastName); // Васильевич

// метод join объединяет элементы массива в строку
// преобразуем массив в строку
const arr = ['Ты', 'знаешь', 'JS'];
console.log(arr.join(' ')); // Ты знаешь JS
