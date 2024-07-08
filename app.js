/**
 * Angol. 2024.07.08
 * Работа со строками
 * Упражнение - выделение имени (73)
 */

// вытащить имя и фамилию в отдельные переменные

let userName = 'Вася aka Terminator Пупкин';

// мое решение:
// перевести строку в массив, выбрать необходимые элементы
// собрать из массива строку
function nameFormStr(str) {
    // Разбиваем строку на элементы массива
    const arrStr = str.split(' ');
    // вытаскиваем первый элемент массива - имя
    const name = arrStr.slice(0, 1);
     // вытаскиваем последний элемент массива - фамилия
    const surName = arrStr.slice(-1);
    // соединяем массивы
    fullName = name.concat(surName);
    // формируем строку из массива
    return fullName.join(' ');
}
// выводим результат
console.log(nameFormStr(userName)); // Вася Пупкин

// Решение преподавателя
// Переименована константа
const fullUserName = 'Вася aka Terminator Пупкин';
// копируем в userName имя из строки
// с нулевого индекса строки по первый индекс пробела
userName = fullUserName.slice(0, fullUserName.indexOf(' '));
console.log(userName); // проверяем
// rjgbhetv d userSurName фамилию из строки
// с посдледнего индекса пробела по конец строки
userSurName = fullUserName.slice(fullUserName.lastIndexOf(' ') + 1, fullUserName.length);
console.log(userSurName); // проверяем

// конечно же нужно было работать с строками а не с массивами.
// мы же изучали строки. Прррррррр.
// но, в общем, методы у них одинаковые

