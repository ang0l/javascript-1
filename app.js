/**
 * Angol. 2024.07.27
 * DOM
 * Упражнение - сохранение JSON (124)
 */

'use strict';

// key: 'text, value: {text:'sdfsdf'}

function submitForm() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }

    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    document.querySelector('.notification').classList.remove('notification_hidden');

    // Мое решение. Начало
    const objText = {
        text: input,
    }

    const text = JSON.stringify(objText);
    localStorage.setItem('text', text);
    // Мое решение. Конец

    // Решение преподавателя. Начало
    const textString = JSON.stringify({
        text: input,
    });
    localStorage.setItem('text', textString);
    // Решение преподавателя. Конец

    // Объект создается непосредственно при создании JSON
}

function inputChanged(e) {
    if (e.code == 'Enter') {
        submitForm();
    }
}
