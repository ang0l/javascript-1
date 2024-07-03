/**
 * Angol. 2024.07.03
 * Функции
 * Условия в функциях
 */

function canAccessWebSite(age) {
    if (age < 18) {
        return 'Нет';
    }
    return 'Да';
    // в этом условии не нужен else, т.к. попадая в условие функция
    // прекращаетсвою работу и return true не сработает.
}
console.log(canAccessWebSite(18));

const canAccessWebSite2 = age => age < 18 ? 'Нет' : 'Да';
console.log(canAccessWebSite2(16));