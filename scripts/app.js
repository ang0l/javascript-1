/**
 * Angol. 2024.08.01
 * Проект "Трекер привычек"
 * Добавление дня (134)
 */

'use strict';

let habbits = [];
let globalActivHabbitId;

const HABBIT_KEY = 'HABBIT_KEY';

// <page> //
const page = {
    menu: document.querySelector('.menu__list'),
    header: {
        h1: document.querySelector('.h1'),
        progressPercent: document.querySelector('.progress__percent'),
        pregressCoverBar: document.querySelector('.progress__cover-bar'),
    },
    content: {
        daysContent: document.getElementById('days'),
        nexDay: document.querySelector('.habbit__day'),
    }
};

// <utils> //

// выгрузка данных из localStorage
function loadData() {
    // const habbitString = localStorage.getItem(HABBIT_KEY);
    // const habbitArray = JSON.parse(habbitString);
    const habbitArray = JSON.parse(localStorage.getItem(HABBIT_KEY));
    if (Array.isArray(habbitArray)) {
        habbits = habbitArray;
    }
}

// загрузка данных в localStorage
function saveData() {
    localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}

// <render> //

function rerenderMenu(activeHabbit) {
    for (const habbit of habbits) {
        const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
        if (!existed) {
            // создание
            const element = document.createElement('button');
            element.setAttribute('menu-habbit-id', habbit.id);
            element.classList.add('menu__item');
            element.addEventListener('click', () => rerender(habbit.id));
            element.innerHTML = `<img src="./images/${habbit.icon}.svg" alt="${habbit.name}">`;
            if (activeHabbit.id === habbit.id) {
                element.classList.add('menu__item_active');
            }
            page.menu.appendChild(element);

            continue;
        }
        if (activeHabbit.id === habbit.id) {
            existed.classList.add('menu__item_active');
        } else {
            existed.classList.remove('menu__item_active');
        }
    }
}

function rerenderHead(activeHabbit) {
    page.header.h1.innerText = activeHabbit.name;
    const progress = activeHabbit.days.length / activeHabbit.target > 1
        ? 100
        : activeHabbit.days.length / activeHabbit.target * 100;
    page.header.progressPercent.innerText = progress.toFixed(0) + '%';
    page.header.pregressCoverBar.setAttribute('style', `width: ${progress}%;`)
}

function rerenderContent(activeHabbit) {
    page.content.daysContent.innerHTML = ''; // очищаем все дни

    // пересоздаем дни
    for (const index in activeHabbit.days) {
        const element = document.createElement('div');
        element.classList.add('habbit');
        element.innerHTML = `<div class="habbit__day">День ${Number(index) + 1}</div>
                            <div class="habbit__comment">
                                ${activeHabbit.days[index].comment}
                            </div>
                            <button class="habbit__delete">
                                <img src="/images/delete.svg" alt="Удалить день ${Number(index) + 1}">
                            </button>`;
        page.content.daysContent.appendChild(element);
    }
    page.content.nexDay.innerHTML = `День ${activeHabbit.days.length + 1}`; // следующий день

}

function rerender(activeHabbitId) {
    globalActivHabbitId = activeHabbitId;
    const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId);
    if (!activeHabbit) {
        return;
    }

    rerenderMenu(activeHabbit);
    rerenderHead(activeHabbit);
    rerenderContent(activeHabbit);
}

// <work with days> //
function addDays(event) {
    // по дефолту сабмит отправляет данные на бэк и перезагружает страницу.
    // нам такое поведение не нужно.
    event.preventDefault(); // игнорируем дефолтное поведение
    const form = event.target;
    const data = new FormData(form); // создаем объект данных формы
    // console.log(data.get('comment')); // получаем данные формы из поля с именем comment (input)
    // console.log(data.getAll('comment')); // получаем массив из полей с таким именем (если вдруг их несколько)

    const comment = data.get('comment');
    form['comment'].classList.remove('error'); // удаляем класс error у элемента формы с именем comment
    if (!comment) {
        // комментарий не введен:
        // console.log(form); // html-код формы. из этой формы нужно вытащить поле input
        form['comment'].classList.add('error'); // достаем из формы элемент с именем comment и добавляем ему класс error
    }
    // console.log(globalActivHabbitId); // проверим с какой привычкой сейчас работаем

    // добавляем коммент к дню (модифицируем массив комментариев)
    habbits = habbits.map(habbit => {
        if (habbit.id === globalActivHabbitId) {
            // найдена привычка в которую мы сейчас комментируем
            return {
                ...habbit,
                days: habbit.days.concat([{ comment }])
            };
        }
        return habbit;
    })
    form['comment'].value = '';
    rerender(globalActivHabbitId);
    saveData();
}

// <init> //

// дополнительно к запуску функции
// в localStorage были загружены данные
// из ../data/demo.json
(() => {
    loadData();
    rerender(habbits[0].id);
})()
