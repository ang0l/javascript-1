/**
 * Angol. 2024.07.03
 * Булева логика
 * Упражнение - Проверка прав (30)
 */

// Пользователь хочет приобрести игру в магазине
// Он может это сделать только если:
// - Его баланс больше 1000 (balance)
// или число бонусов больше 100 (bonusBalance)
// - Он не забанен (isBanned)
// - Игра не куплена (isExist)
// - Игра в продаже (isSalling)
// Напишите условие для покупки и выведите в консоль
// результат

// Мое решение:
// // Данные
// let balance = 1001;
// let bonusBalance = 101;
// let isBanned = false;
// let isExist = false;
// let isSalling = true;

// // Расчет
// let result = (balance > 1000 || bonusBalance > 100) && !isBanned && !isExist && isSalling;

// // Результат
// console.log(result ? 'Пользователь может купить игру' : 'Пользователь не може купить игру');

// Решение преподавателя:
const balance = 1200;
const bonusBalance = 90;
const isBanned = false;
const isExist = false;
const isSalling = true;

const canBuy = (balance > 1000 || bonusBalance > 100)
    && !isBanned
    && !isExist
    && isSalling;

console.log(`Могу купить игру ${canBuy ? 'Да' : 'Нет'}`);

// Почти тоже самое.
