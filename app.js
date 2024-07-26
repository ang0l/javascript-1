/**
 * Angol. 2024.07.26
 * DOM
 * Работа со стилями и классами (118)
 */

'use strict';

function submitForm() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }

    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';

    // вариант работы со стилями:
    // вариант плох тем, что необходимо руками редактирвать каждое свойство
    // document.querySelector('.notification').style.display = 'block';

    // вариант работы с классами:
    // добавляем класс
    // document.querySelector('.notification').classList.add('notification_active')
    // точка перед классом нужна в querySelector
    // и  не нужна при добавлении класса, 
    // т.к. мы добавляем непосредственно конкретное наименование класса в список добовления
    // через запятую

    // удаляем класс
    // добавляем конкретныее наименования классов в список удаления, через запятую.
    // точка также не нужна
    document.querySelector('.notification').classList.remove('notification_hidden')

    console.log();
}

function inputChanged(e) {
    if (e.code == 'Enter') {
        submitForm();
    }
}
