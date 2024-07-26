/**
 * Angol. 2024.07.26
 * DOM
 * Выбор и манипуляции с элементами (115)
 */

'use strict';

// console.log(document); // блоки head, body пустые

// // загрузим документ (включаем слушателя)
// addEventListener('load', () => {
//     console.log(document);
// })

// в документе index.html перенесли загрузку скрипта в самый низ блока body
// console.log(document);
console.log(document.querySelector('.panel')); //  <div class="panel">I love this!</div>
console.log(document.querySelector('.panel').innerHTML); // I love this!
console.log(document.querySelector('.panel').innerText); // I love this!

const panelText = document.querySelector('.panel').innerText;
console.log(panelText); // I love this!

// меняем в браузере текст I love this! на New text:
document.querySelector('.panel').innerText = 'New text';

// заполняем текстовое поле input значением Text:
document.querySelector('.input').value = 'Text';
