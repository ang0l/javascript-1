/**
 * Angol. 2024.07.03
 * Массивы
 * Упражнение - Обновление списка задач
 */

// Дан спиок задач
// const tasks = ['Задача 1'];
// Сделать функции:
// - Добавления задач в конец
// - Удаление задачи по названию
// - Перенос задачи в начало списка по названию
// Всегда меняем исходный массив

// Мое решение
// const tasks = ['Задача 1'];

// function addTask(tasks, task) {
//     return tasks.push(task)
// }

// function deleteTask(tasks, task) {

//     const taskIndex = tasks.indexOf(task);
    
//     if (taskIndex > -1) {
//         tasks.splice(taskIndex, 1);
//         return tasks;
//     }

//     return false;

// }

// function moveTask(tasks, task) {

//     const taskIndex = tasks.indexOf(task);

//     if (taskIndex > -1) {
//         const result = tasks.splice(taskIndex, 1);
//         return tasks.unshift(result[0]);
//     }

//     return false;
    
// }

// addTask(tasks, 'Задача 2');
// addTask(tasks, 'Задача 3');
// addTask(tasks, 'Задача 4');
// console.log(tasks);

// deleteTask(tasks, 'Задача 2');
// console.log(tasks);

// moveTask(tasks, 'Задача 3');
// console.log(tasks);

// Решение преподавателя
const tasks = ['Задача 1'];

function add(task) {
    tasks.push(task)
}

function remove(task) {
    const index = tasks.indexOf(task);
    if (index == -1) {
        return;
    }
    tasks.splice(index, 1);
}

function prioritize(task) {
    const index = tasks.indexOf(task);
    if (index == -1) {
        return;
    }
   const oldTask = tasks[index];
    tasks.splice(index, 1);
    tasks.unshift(oldTask);
}

add('Задача 2');
add('Задача 3');
console.log(tasks);

remove('Задача 4');
console.log(tasks);

prioritize('Задача 3');
console.log(tasks);
