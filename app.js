/**
 * Angol. 2024.07.03
 * Функции
 * Параметры по умолчанию (35)
 */

function toPower(num, power = 2) {
    // console.log(typeof power); // Проверка типа power
    // const power2 = power ?? 2;
    const res = num ** power;
    return res;
}
console.log(toPower(2, 3));
console.log(toPower(2));
