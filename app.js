/**
 * Angol. 2024.07.10
 * Работа со строками
 * Упражнение - маскировка карты (78)
 */

// замаскировать все, кроме последних 4х символов
const card = '2342834503458353';
// ************8353

// Мое решение:
function maskCard(cardNubmer) {
    const card = cardNubmer.slice(-4);
    return card.padStart(16, '*');
}
console.log(maskCard(card));

// Решение препрдавателя:
console.log(card.slice(-4).padStart(16, '*'));

// здорово!