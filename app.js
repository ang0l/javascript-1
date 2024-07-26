/**
 * Angol. 2024.07.24
 * Управление this
 * Упражнение - Работа с замыканиями (113)
 */

'use strict';

// сделать функцию пользователя, которая берет за основу
// userInfo и за счет замыкания создает новый объект, с 
// которым можно работать как user1().increse(100)

const userInfo = {
    balanse: 0,
    ooperations: 0,
    increse(sum) {
        this.balanse += sum;
        this.ooperations ++;
    },
};

// Мое решение
const userMy = userInfo;

userMy.increse(100);
userMy.increse(-50);
userMy.increse(200);

console.log(userMy.balanse); // 250

// вобщем я замыкание вообще не использоват.
// если я правльно понял, то замыкание - это функция возвращающая функцию
// бррр. запутался. пересмотрю позже.

// Решение преподавателя
// function user() {
//     const userObj = userInfo;
//     return function() {
//         return userObj;
//     }
// }
// Данный (выше) код делает ссылку на объект. все изменения проиходят в одном объекте
// Чтобы этого избежать, необходимо каждый раз создавать новый объект:
function user() {
    const userObj = {
        balanse: 0,
        ooperations: 0,
        increse(sum) {
            this.balanse += sum;
            this.ooperations ++;
        }
    }
    return function() {
        return userObj;
    }
}


const user1 = user();

user1().increse(100);
user1().increse(100);
console.log(user1());

const user2 = user();

user2().increse(100);
console.log(user2());

