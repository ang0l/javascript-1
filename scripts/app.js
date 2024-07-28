/**
 * Angol. 2024.07.28
 * Проект "Трекер привычек"
 * Рендер шапки (131)
 */

'use strict';

let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY';

// <page> //
const page = {
    menu: document.querySelector('.menu__list'),
    header: {
        h1: document.querySelector('.h1'),
        progressPercent: document.querySelector('.progress__percent'),
        pregressCoverBar: document.querySelector('.progress__cover-bar'),
    },
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

function rerenderMenu(acitveHabbit) {
    if (!acitveHabbit) {
        return;
    }

    for (const habbit of habbits) {
        const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
        if (!existed) {
            // создание
            const element = document.createElement('button');
            element.setAttribute('menu-habbit-id', habbit.id);
            element.classList.add('menu__item');
            element.addEventListener('click', () => rerender(habbit.id));
            element.innerHTML = `<img src="./images/${habbit.icon}.svg" alt="${habbit.name}">`;
            if (acitveHabbit.id === habbit.id) {
                element.classList.add('menu__item_active');
            }
            page.menu.appendChild(element);

            continue;
        }
        if (acitveHabbit.id === habbit.id) {
            existed.classList.add('menu__item_active');
        } else {
            existed.classList.remove('menu__item_active');
        }
    }
}

function rerenderHead(acitveHabbit) {
    if (!acitveHabbit) {
        return;
    }
    page.header.h1.innerText = acitveHabbit.name;
    const progress = acitveHabbit.days.length / acitveHabbit.target > 1
        ? 100
        : acitveHabbit.days.length / acitveHabbit.target * 100;
    page.header.progressPercent.innerText = progress.toFixed(0) + '%';
    page.header.pregressCoverBar.setAttribute('style', `width: ${progress}%;`)
}

function rerender(acitveHabbitId) {
    const acitveHabbit = habbits.find(habbit => habbit.id === acitveHabbitId);
    rerenderMenu(acitveHabbit);
    rerenderHead(acitveHabbit);
}

// <init> //

// дополнительно к запуску функции
// в localStorage были загружены данные
// из ../data/demo.json
(() => {
    loadData();
    rerender(habbits[0].id);
})()