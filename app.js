/**
 * Angol. 2024.07.21
 * Управление this
 * Call, apply (108)
 */

'use strict';

const audi = {
    make: 'Audi',
    model: 'A3',
    year: 2021,
    damages: [],
    addDamage(part, rate) {
        console.log(`У авто ${this.make} ${this.model} ${this.year} добавлено: повреждение ${part} со степенью ${rate}`); // У авто Audi A3 2021 добавлено: повреждение Капот со степенью 1
        this.damages.push({
            part,
            rate,
        })
    }
};

audi.addDamage('Капот', 1);

const bmw = {
    make: 'BMW',
    model: 'X5',
    year: 2022,
    damages: [],
};

bmw.addDamage = audi.addDamage;
bmw.addDamage('Бампер', 2); // У авто BMW X5 2022 добавлено: повреждение Бампер со степенью 2

const addDamageFunc = audi.addDamage;
// addDamageFunc('Бампер', 2); // ошибка

// мы хотим вызвать функцию addDamageFunc в контексте объекта bmw
// и передав в эту функцию 2 аргумента: Бампер и 2:
addDamageFunc.call(bmw, 'Бампер', 2); // У авто BMW X5 2022 добавлено: повреждение Бампер со степенью 2
addDamageFunc.call(audi, 'Бампер', 2); // У авто Audi A3 2021 добавлено: повреждение Бампер со степенью 2

// мы хотим применить метод объекта с массивом аргументов
addDamageFunc.apply(bmw, ['Дверь', 3]); // У авто BMW X5 2022 добавлено: повреждение Дверь со степенью 3
addDamageFunc.apply(audi, ['Дверь', 3]); // У авто Audi A3 2021 добавлено: повреждение Дверь со степенью 3
