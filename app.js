/**
 * Angol. 2024.07.21
 * Управление this
 * Bind (109)
 */

'use strict';

const audi = {
    make: 'Audi',
    model: 'A3',
    damages: [],
};

const carManipulation = {
    addDamage(part, rate) {
        this.damages.push({part, rate});
        console.log(`Добавить повреждение на ${this.make} ${this.model}`);
    }
};

// bind говорит о том, что метод addDamage связан с объектом audi
// кодга мы будем вызывать addDamage, this будет принимать значение нашего audi
const addDamabeAudi = carManipulation.addDamage.bind(audi);
addDamabeAudi('Крыло', 3);
console.log(audi);

const addDamabeAudiRoof = carManipulation.addDamage.bind(audi, 'Крыша');
addDamabeAudiRoof(5);
console.log(audi);
