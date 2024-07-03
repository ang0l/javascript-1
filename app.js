/**
 * Angol. 2024.07.03
 * Управление потоком
 * Операторы равенства (22)
 */

const secretNumber = '7';

if (secretNumber === 7) {
    console.log('Угадал строго');
}

if (secretNumber == 7) {
    console.log('Угадал не строго');
}
//////////////
// Желательно применять строгое равенство всегда
// К этому, дополнительно, необходимо применить приведение типов
// строка кода ниже:
/////////////
if (Number(secretNumber) === 7) {
    console.log('Угадал строго с приведением типов');
}

const q = Number(prompt('Введите число'));
if (q === 7) {
    console.log('Угадал!!!');
}

////////////
// Итог занятия:
// 1. Использовать всегда строгое равенство.
// 2. В обязательном порядке приводить тпиы при проверке на равенство.
////////////
