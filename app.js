/**
 * Angol. 2024.07.05
 * Циклы
 * Циклы For of и For in (54)
 */

const arr = [1, 4, 8, 7];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let element of arr) {
    console.log(element);
}

for (let index in arr) {
    console.log(index);
    console.log(arr[index]);
}
