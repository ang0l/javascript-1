/**
 * Angol. 2024.07.12
 * Объекты
 * Методы объектов (83)
 */

const user = {
    name: 'Вася',
    surname: 'Пупкин',
    age: 24,

    getFullName: function() {
        console.log(this);
        return this.name + ' ' + this.surname;
    }
}

const getFullName = function(user) {
    return user.name + ' ' + user.surname;
}

console.log(user.getFullName()); // обращение к методу объекта

const arr = [1, 2];
arr.sort(); // обращение к методу массива (объекта)
'23432EFCD324'.toLowerCase(); // обращение к методу строки (объекта)
