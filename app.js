/**
 * Angol. 2024.07.16
 * Как работает JS под капотом
 * Пример работы call stack (94)
 */

const sum = 1;
console.log('started');
console.log(sum);

function add5(n) {
    n = n + 5;
    if (n > 100) {
        return n;
    }

    console.log(n);
    return add5(n);
}

add5(sum);
console.log('ended');
