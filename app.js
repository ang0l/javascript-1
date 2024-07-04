/**
 * Angol. 2024.07.03
 * Массивы
 * Упражнение - Функция рабора URL (48)
 */

// Дан произвольный url -
// 'https://purplechool.ru/course/javascript'
// Нужно сделать функцию, которая выводит в консоль:
// - Протокол (https)
// - Доменное имя (purpleschool.ru)
// - Путь внутри сайта (/course/javascript)

const url = 'https://purplechool.ru/course/javascript';

function getUrlParts(url) {
    const [protocol, _, host, ...path] = url.split('/');
    console.log(protocol, host, path);
    console.log(`Протокол: ${protocol.split(':')[0]}`);
    console.log(`Доменное имя: ${host}`);
    console.log(`Путь внутри сайта: /${path.join('/')}`);
}
// в даннной функции нет проверки на правильность задания url

getUrlParts(url);
