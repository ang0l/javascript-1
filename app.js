/**
 * Angol. 2024.07.03
 * Циклы
 * Break и continue (50)
 */

const tasks = ['Задача 1', 'Задача 2', 'Задача 3'];

for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === 'Задача 2') {
        continue; // закончить итерацию и начать новую
    }
    console.log(tasks[i]);
}

console.log('-----------------');

for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === 'Задача 2') {
        break; // прекратить выполнение цикла
    }
    console.log(tasks[i]);
}
