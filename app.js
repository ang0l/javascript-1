/**
 * Angol. 2024.07.06
 * Итерации в массивах
 * Быстрое создание массивов (70)
 */

 const arr = [1, 2, 3, 4, 5];

 console.log(new Array(1, 2, 3, 4, 5));

 // создание пустого массива
 const arr2 = new Array(5);
 console.log(arr2); // [empty × 5]

 // метод map не взаимодействует с пустым массивом:
 console.log(arr2.map(el => el + 2)); // [empty × 5]

 // метод fill заполняет массив
 arr2.fill(1)
 console.log(arr2); // [1, 1, 1, 1, 1]
 // 2 и 3 аргументы указывают с какого по какой элемент заполнять
 const arr3 = new Array(5);
 arr3.fill(1, 0, 3);
 arr3.fill(2, 3, 5);
 console.log(arr3); // [1, 1, 1, 2, 2]

 // объектом задаем длину массива.
 // в callback-функции аргументы cur (курсок) и i (индекс)
 // к индексу прибавляем 10, получаем в элементах значение i + 10
 const arr4 = Array.from({length: 5}, (cur, i) => i + 10);
 console.log(arr4); // [10, 11, 12, 13, 14]
 