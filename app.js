/**
 * Angol. 2024.07.12
 * Объекты
 * Итерирование по объектам (86)
 */

// объект городов: город, температура, что-нибудь еще.
const cities = {
    msk: {
        temp: 25
    },
    spb: {
        temp: 20
    }
}

// for (const city of cities) {
//     console.log(city);
// }

let sumTemp = 0;
// let citiesCount = 0; // оптимизируем код
let citiesCount = Object.keys(cities).length;
// метод keys объекта Object позволяет получить ключи из нашего объекта

for (const key in cities) {
    // citiesCount ++; // оптимизируем код
    sumTemp += cities[key].temp;
}
console.log(sumTemp / citiesCount);

sumTemp = 0;
for (const key of Object.keys(cities)) {
    sumTemp += cities[key].temp;
}
console.log(sumTemp / citiesCount);
