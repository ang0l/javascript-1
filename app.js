/**
 * Angol. 2024.07.03
 * Булева логика
 * Оператор нулевого слияния (29)
 */

let userName = 'Вася';
// Ноль, пустая строка, null, undefinde, false
// в переменной userName
// выведут: Default Username
console.log(userName || 'Default Username');

// null и undefinde
// в переменной userName
// выведут: Default Username
console.log(userName ?? 'Default Username');
