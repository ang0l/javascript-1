/**
 * Angol. 2024.07.03
 * Функции
 * Стрелочные функции (33)
 */

// Обычная функция
function powerOfTwo(num) {
    return num * num;
}
console.log(powerOfTwo(5));

// Стрелочная функция в одну строку
const poft = (num) => num * num;
console.log(poft(6));

// стрелочная функция в несколько строк с одним аргументом
const poft1 = num => {
    console.log(num);
    return num * num;
}
console.log(poft1(7));

// стрелочная функция в несколько строк с несколькими агрументами
const poft2 = (num, num2) => {
    console.log(num);
    return num * num2;
}
console.log(poft2(7, 3));
