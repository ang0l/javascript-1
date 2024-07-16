/**
 * Angol. 2024.07.12
 * Объекты
 * Упражнение - склад (89)
 */

// Сделать объект склад с методами, добавления на склад, поиска
// по складу ьлваоа и оасчеь веса.

const warehouse = {
    goods: [],
    findGoodById: function(id) {
        return this.goods.find(g => g.id === id);
    },

    addGood: function(good) {
        // const existeGood = this.goods.find(g => g.id === good.id);
        const existeGood = this.findGoodById(good.id);
        if (existeGood) {
            console.log('Этот товар уже есть на складе');
            return;
        }
        this.goods.push(good)
    },
    getMeightKg: function() {
        return this.goods.reduce((acc, el) => 
            acc += el.weight?.kg ? el.weight.kg : 0,
            0
        )
    }
};

// товары
const car = {
    id: 1,
    weight: {
        kg: 1000
    },
    barnd: 'Ford'
};
const chair = {
    id: 2,
    weight: {
        kg: 2
    },
};
const paper = {
    id: 3,
    color: 'red',
}
warehouse.addGood(car);
warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
console.log(warehouse.goods);

let findedItem = warehouse.findGoodById(3);
console.log(findedItem);
findedItem = warehouse.findGoodById(6);
console.log(findedItem);

const w = warehouse.getMeightKg();
console.log(w);
