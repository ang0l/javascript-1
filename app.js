/**
 * Angol. 2024.07.18
 * Scope и this
 * Strict mode (98)
 */
'use strict';

let myCoolVariable = 1;

if (true) {
    myCoolVariable = 3; // myCoolVariabl при use strict выдает здесь ошибку
    function a () {
        console.log('Test');
    }
}

// a(); // без use strict функция видна в глобальном скопе

console.log(myCoolVariable);

// const interface = 8; // interface - зарезервированное слово без use strict ошибки не будет

// use strict блокирует дублирование аргументв
// без use strict функция b() отработает без проблем.
// function b(c, c) {
//     console.log(c);
// }
// b(1, 1);
