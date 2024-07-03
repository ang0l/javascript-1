/**
 * Angol. 2024.07.03
 * Управление потоком
 * Упражнение - Проверка робота (25)
 */

// Методом prompt получите ответ пользователя
// на запрос "Сколько будет 7 + или - 15?". Если ответ верен
// выведите в консоле "Успех", если нет - "Вы робот!",
// а ели он введет "Я не робот", то тоже "Успех".

// Мой вариант решения:
// let answer = prompt('Сколько будет 7 + или - 15?');
// let result;
// 
// switch (true) {
//     case answer == -8:
//     case answer == 22:
//     case answer == 'Я не робот':
//         result = 'Успех';
//         break;
//     default:
//         result = 'Вы робот';
// }
//
// console.log(result);

// Решение преподавателя:
// Вариант 1:
const res = prompt('Сколько будет 7 + или - 15?');

switch(true) {
    case res === 'Я не робот':
    case Number(res) === 22:
    case Number(res) === -8:
        console.log('Успех');
        break;
    default:
        console.log('Вы робот');
}

// Вариант 2:
if (res === 'Я не робот' ) {
    console.log('Успех');
} else {
    const resNum = Number(res);
    switch(resNum) {
        case 22:
        case -8:
            console.log('Успех');
            break;
        default:
            console.log('Вы робот!');
    }
}
