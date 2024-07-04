/**
 * Angol. 2024.07.03
 * Массивы
 * Деструктуризация (46)
 */
const userData = ['Антон', 18, 'Москва'];

function getData() {
    return ['Антон', 18, 'Москва']
}
// const userName = getData()[0];
// const userAge = getData()[1];
// const userCity = getData()[2];
// ниже одной строкой сделаем тоже самое

// деструктуризация:
// объявляем не массив, но список переменных, которым будут присваиваться элементам массива
// еще раз своими словами:
// каждой переменной из списка присваиваются значения из массива по порядку массива
let [userName, userAge, userCity] = getData();
// так же это можно сделать не с функцией, а с исходным массивом
// const [userName, userAge, userCity] = userData;

console.log(userName, userAge, userCity);

// исключаем элемент массива:
[userName, _, userCity] = userData;

console.log(userName, userCity);