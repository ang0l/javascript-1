/**
 * Angol 2024.07.02
 * Основы
 * Операторы присваивания и сравнения (13)
 *
*/

// Базовые арифмитические операторы
const width = 10;
const height = 5;
const space = width * height; // Оператор умножения
const newWidth = width - 4; // Оператор вычитания
const newWidth2 = width + 4; // Оператор сложения
const division = newWidth / newWidth2; // Оператор деления
const volume = 2 ** 3; // Оператор стемени (2 в степени 3)

console.log(volume);

// Строки (операции конкатенации - сложения строк)
const city = 'Москва';
const street = 'Новослободская';

console.log(city + ', ' + street + ', ' + 5);

// Операторы присваивания
let age = 18 + 5; // Это оператор присваивания
age += 2; // Короткая запись age = age + 2
age -= 3; // Короткая запись age = age - 2
age *= 2; // Короткая запись age = age * 2
age /= 2; // Короткая запись age = age / 2

age++; // Короткая запись age = age + 1
age--; // Короткая запись age = age - 1

console.log(age);

// Операторы сравнения
const vasia = 20;
console.log(age > vasia); // больше
console.log(age >= vasia); // больше либо равно
console.log(age < vasia); // меньше
console.log(age <= vasia); // меньше либо равно
console.log(age == vasia); // равно
