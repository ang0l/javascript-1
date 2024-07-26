/**
 * Angol. 2024.07.26
 * DOM
 * Обработка нажатий (116)
 */

'use strict';

document.querySelector('.button').addEventListener('click', function(e) {
    // console.log(e); // в браузере при клике на кнопку, в консоле выводится poineterEvent
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }

    // console.log(input); // проверяем, что получилось

    document.querySelector('.panel').innerText = input; // меняем текст в панели
    document.querySelector('.input').value = ''; // очищаем поле ввода
});

// сделаем все немного красивие:
function changeClick() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }

    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
};

// как вызвать?
// вызовем из HTML-кода (строка 14): <button class="button" onclick="changeClick">Change</button>
