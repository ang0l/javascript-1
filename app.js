/**
 * Angol. 2024.07.27
 * DOM
 * Local storage (122)
 * Хранение данных
 * Данная лекция относится не к DOM, а именно к Local storage
 */

'use strict';

function submitForm() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }

    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    document.querySelector('.notification').classList.remove('notification_hidden')

    console.log();
}

function inputChanged(e) {
    if (e.code == 'Enter') {
        submitForm();
    }
}

// сохраняем объекты в локал стораж
localStorage.setItem('token', 'sfgsdkf'); // положим туда строку
localStorage.setItem('token1', 1); // положим туда число
localStorage.setItem('token1', true); // перезапишем там булево. запишется строкой
// при попытке положить в локал стораж один и тот же объект, он перезапишется.
// все что мы кладем в локал стораж, преобразовывается в строку

// получаем объекты из локал стораж
const token1 = localStorage.getItem('token1')
console.log(`${token1} - ${typeof token1}`); // получаем булево значение строкой

localStorage.removeItem('token1'); // удалили объект из локал стораж
localStorage.clear(); // очистили локал стораж
// аккуратно с очисткой локал стораж. там могут быть данные сторонних скриптов
// например яндекс.метрики или goole аналитики...
