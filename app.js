/**
 * Angol. 2024.07.03
 * Массивы
 * Поиск элемента
 */

const roles = ['user', 'admin', 'manager', 'admin'];

const elIndex = roles.indexOf('admin'); // метод inexOf ищет первое вхождение индекса
console.log(elIndex); // 1

const elIndex2 = roles.indexOf('superuser'); // метод inexOf ищет первое вхождение индекса
console.log(elIndex2); // -1 - индек не найден

// условие
if (roles.indexOf('admin') >= 0) {
    console.log('Доступ есть');
}

// includes возвращает булево
console.log(roles.includes('admin')); // true
console.log(roles.includes('superuser')); // false

// условие
if (roles.includes('admin')) {
    console.log('Доступ есть');
}

