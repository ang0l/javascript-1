/**
 * Angol. 2024.07.03
 * Массивы
 * Принцип DRY
 */

// Дан спиок задач
// const tasks = ['Задача 1'];
// Сделать функции:
// - Добавления задач в конец
// - Удаление задачи по названию
// - Перенос задачи в начало списка по названию
// Всегда меняем исходный массив

const tasks = ['Задача 1'];

function add(task) {
    tasks.push(task)
}

function remove(task) {
    const index = tasks.indexOf(task);
    if (index === -1) {
        return;
    }
    // tasks.splice(index, 1);
    return tasks.splice(index, 1);
}

// Перепишем функцюю
// function prioritize(task) {
//     const index = tasks.indexOf(task);
//     if (index == -1) {
//         return;
//     }
//    const oldTask = tasks[index];
//     tasks.splice(index, 1);
//     tasks.unshift(oldTask);
// }
function prioritize(task) {
    const result = remove(task);
    if (!result) {
        return;
    }
        tasks.unshift(result[0]);
}

add('Задача 2');
add('Задача 3');
console.log(tasks);

remove('Задача 4');
console.log(tasks);

prioritize('Задача 3');
console.log(tasks);
