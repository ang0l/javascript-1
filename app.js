/**
 * Angol. 2024.07.03
 * Управление потоком
 * Switch (23)
 */

const role = 'manager';

// Сравнение с if else
// if (role === 'manager') {
//     console.log('Менеджер');
// } else if (role === 'admin') {
//     console.log('Администратор');
// } else if (role === 'ceo') {
//     console.log('СЕО');
// } else {
//     console.log('Мы тебя не знаем');
// }

// сам switch
switch (role) {
    case 'manager': // role === 'manager' (именно строгое равенство)
        console.log('Менеджер');
        break;
    case 'admin':
        console.log('Администратор');
        break;
    case 'ceo':
        console.log('СЕО');
        break;
    default:
        console.log('Мы тебя не знаем');
}

// Объединение кейсов
switch (role) {
    case 'manager':
    case 'admin':
        console.log('Не руководитель');
        break;
    case 'ceo':
        console.log('Руководитель');
        break;
    default:
        console.log('Мы тебя не знаем');
}

const num = 1;

// Проверка на разные сравнения
switch(true) {
    case num > 0: // true === num > 0
        console.log('Положительный');
        break;
    case num < 0: // true === num < 0
        console.log('Отрицательный');
        break;
    default:
        console.log('Ноль!');
}
