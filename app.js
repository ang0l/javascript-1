/**
 * Angol. 2024.07.27
 * DOM
 * JSON (123)
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

const obj = JSON.parse('{"a": 1}');
console.log(obj); // объект JSON
console.log(obj.a); // элемент объекта JSON

const str = JSON.stringify(obj);
console.log(str); // строка содержащая JSON. но при этом - строка.
