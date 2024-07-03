/**
 * Angol. 2024.07.03
 * Управление потоком
 * Тернарные операторы (24)
 */

const bmwX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 20000;

// Условие if else
//
// Переменную необходимо объявить до проверки условия
// При объявлениеи внутри условия переменной,
// ее не видно снаружи условия.
let message;
if (budget > bmwX3Price) {
    message = 'BMW';
} else {
    message= 'Велосипед';
}

console.log(`Я хочу купить ${message}`);

// Тернарный оператор
// 10 > 0 ? console.log('Больше 0') : console.log('Меньше 0');
const str = 10 > 0 ? 'Больше 0' : 'Меньше 0';
console.log(str);

console.log(`Я хочу купить ${budget > bmwX3Price ? 'BMW' : budget > fordFocusPrice ? 'Ford' : 'Велосипед'}`);

// Вариант с переменной
let car = budget > bmwX3Price
    ? 'BMW'
    : budget > fordFocusPrice ? 'Ford' : 'Велосипед';

console.log(`Я хочу купить ${car}`);
