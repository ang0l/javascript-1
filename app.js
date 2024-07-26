/**
 * Angol. 2024.07.26
 * DOM
 * Добавление html на лету (121)
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

const panelText = 'Панель';
const panelClass = 'button';
const newElement = document.createElement('div');

newElement.classList.add('panel');
newElement.setAttribute('user-id', 1);
// newElement.innerText = 'Кнопка'; // положим туда не innerText
// newElement.innerHTML = `<div>${panelText}</div>`;
newElement.innerHTML = `<button class=${panelClass}>${panelText}</button>`;

document.querySelector('.test').appendChild(newElement);
