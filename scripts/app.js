/**
 * Angol. 2024.07.28
 * Проект "Трекер привычек"
 * Загрузка и сохранение данных (129)
 */

'use strict';

let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY';

// utils

function loadData() {
    const habbitString = localStorage.getItem(HABBIT_KEY);
    const habbitArray = JSON.parse(habbitString);
    if (Array.isArray(habbitArray)) {
        habbits = habbitArray;
    }
}

function saveData() {
    localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}

// дополнительно к запуску функции
// в localStorage были загружены данные
// из ../data/demo.json
(() => {
    loadData();
})()