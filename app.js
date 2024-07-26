/**
 * Angol. 2024.07.26
 * DOM
 * Упражнение - получение DOM элементов (120)
 */

'use strict';

console.log('Мое решение');
console.log(document.querySelector('.one').innerText);
console.log(document.querySelector('#two').innerText);

console.log('Решение преподавателя');
console.log(document.querySelector('.one').innerText);
console.log(document.querySelector('.one ~ div').innerText); // не совсем уместно, т.к. div может быть не соседний
console.log(document.querySelector('#two').innerText);
console.log(document.querySelector('[user-id="4"]').innerText);

console.log('Альтернативные пути получения контента:');
console.log(document.querySelectorAll('.one')[0].innerText);
console.log(document.querySelectorAll('.one')[1].innerText);
console.log(document.getElementById('two').innerText); // точка не нужна
