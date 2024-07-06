/**
 * Angol. 2024.07.06
 * Работа со строками
 * Базовые методы (72)
 */


let userName = 'Вася Пупкин';

// к строке можно обращаться как к массиву:
console.log(userName[0]); // В
console.log(userName[1]); // а

// полностью аналогично можно получить символы
// используя метод charAt
console.log(userName.charAt(2)); // с
console.log(userName.charAt(3)); // я

// при добавлении эмоджи
// эмодзи занимает 2 символа
userName = '💩Вася Пупкин';
console.log(userName); // 💩Вася Пупкин
console.log(userName[0]); // �
console.log(userName[1]); // �
console.log(userName.charAt(2)); // В

// сложим 2 символа, что бы вывести эмодзи
console.log(userName.charAt(0) + userName.charAt(1));

// можно указать индекс непосредственно на строке:
console.log('Вася Пупкин'[0]); // В

// узнаем длину строки (как в массиве);
console.log(userName.length); // 13 (Первые 2 символа - эмодзи, далее 11 симолов имени)

userName = 'Вася Пупкина';
// поиск в строке
console.log(userName.indexOf('а')); // 1 (возвращается первый найденный номер индекса)
console.log(userName.lastIndexOf('а')); // 11 (возвращается последний найденный номер индекса)
console.log(userName.indexOf('уп')); // 6 (возвращается первое вхождение подстроки)
console.log(userName.indexOf('упв')); // -1 (подстрока не найдена)
console.log(userName.includes('уп')); // true (подстрока найдена)
console.log(userName.includes('упв')); // false (подстрока не найдена)

console.log(userName.slice(5)); // Пупкина (возвращает подстроку с указанного индекса до конца строки)
console.log(userName.slice(5, 8)); // Пуп (возвращает подстроку с указанного индекса до указанного индеска исключая его)
