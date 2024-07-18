/**
 * Angol. 2024.07.18
 * Scope и this
 * Контекст в методах (104)
 */

'use strict';

// стрелочные функции в контексте объекта
const user = {
    firstName: 'Вася',
    lastName: 'Пупкин',
    age: 20,
    getUserInfo: function() {
        console.log(this); // объект
        console.log(`${this.firstName} ${this.lastName}`);

        const canDrink = () => {
            if (this.age >= 18) {
                console.log('Может уже пить');
            } else {
                console.log('Не может пить');
            }
        }
        canDrink();
    },

    getUserInfoArrow: () => {
        console.log(this); // Window
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

// user.getUserInfo(); // Вася Пупкин
// user.getUserInfoArrow(); // undefined undefined
// в стрелочной функции внутри объекта не имеет своего this. this указывает на Window (на глобальный скоп).

// добавили еще одну функцию в метод объекта (canDrink())
// user.getUserInfo(); // ошибка о невозможности прочитать свойства (age)

// переделали эту функцию в стрелчную и this стал виден в контекстре объекта
user.getUserInfo();
