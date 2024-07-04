/**
 * Angol. 2024.07.03
 * Массивы
 * Из строки в массив и обратно
 */

const roles = ['user', 'admin', 'manager', 'superuser'];
const url = 'auth/user/login';

const res = url.split('/');
console.log(res);

console.log(roles.join('-'));
