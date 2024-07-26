/**
 * Angol. 2024.07.26
 * DOM
 * Обработка событий клавиатуры (117)
 */

'use strict';

function submitForm() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }

    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
}

function changeClick(e) {
    if (e.code == 'Enter') {
        submitForm();
    }
}

// вышенаписанный код на много чище ниженаписанного
// внизу хоть и написано какие селекторы затрагиваются,
// но их видно в HTML событиями
// и их можно посмотреть провалившись в app.js

// document.querySelector('.input').addEventListener('keydown', (e) => {
//     // console.log(e);
//     if (e.code == 'Enter') {
//         // console.log('Enter');
//         submitForm();
//     }
// })
