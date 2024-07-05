/**
 * Angol. 2024.07.05
 * Циклы
 * Цикл While (52)
 */

for (let i = 1; i < 5 ; i++) {
    console.log(`Вывод - ${i}`);
}

let i = 1;
while (i < 5) {
    console.log(`Вывод - ${i}`);
    i++;
}

//////////////
console.log('-----------------');
const arr = [1, 4, 8, 7];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
        break;
    }
    console.log(arr[i]);
}

// Сначала проверка условия, потом выполнение кода.
// В зависимости от условия цикл можен не выполниться ни разу.
i = 0;
while (arr[i] <= 5 && i < arr.length) {
    console.log(arr[i]);
    i++;
}

// Сначала выполнение кода, потом проверка условия.
// Этот цикл будет выполняться как минимум 1 раз.
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 0)
