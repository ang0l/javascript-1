/**
 * Angol. 2024.07.08
 * Работа со строками
 * Преобразование строки (75)
 */

// Проверить является ли это номером телефона России
// верные
const num1 = '89103235356';
const num2 = '+79103235357';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = '   +7(910) 323-53-56   ';
// неверные
const un1Error = '89103235';
const un2Error = '+7d910d323-53-56';
const un3Error = '9+79103235356';
const un4Error = '89103g35356';

// функуия isNaN возвращает trut если проверяется строка, false - если число.
console.log(isNaN(Number('123456+'))); // если не число - true, иначе false

// Мое решение:
function isNumber(num) {
    const tempNum = num
        .trim()
        .replace('+7', '8')
        .replaceAll('(', '')
        .replaceAll(')', '')
        .replaceAll(' ', '')
        .replaceAll('-', '');

    switch (true) {
        case tempNum.length !== 11:
            return false;
        case !tempNum.startsWith('8'):
            return false;
        case isNaN(Number(tempNum)):
            return false;
        default:
            return true;
    }

}

console.log(`Номер телефона ${isNumber(un4Error) ? 'верный' : 'неверный'}`);


// Решение преподавателя:
function isPhoneNubmer(num) {
    num = num.trim();
    num = num.replace('+7', '8');
    if (!num.startsWith('8')) {
        return false;
    }
    num = num.replaceAll('(', '');
    num = num.replaceAll(')', '');
    num = num.replaceAll(' ', '');
    num = num.replaceAll('-', '');
    if (num.length != 11) {
        return false;
    }
    let onlyNumber = true;
    for (const char of num) {
        if (isNaN(Number(char))) {
            onlyNumber = false;
            break;
        }
    }
    return onlyNumber;
}
// true
console.log(isPhoneNubmer(num1));
console.log(isPhoneNubmer(num2));
console.log(isPhoneNubmer(num3));
console.log(isPhoneNubmer(num4));
console.log(isPhoneNubmer(num5));
// false
console.log(isPhoneNubmer(un1Error));
console.log(isPhoneNubmer(un2Error));
console.log(isPhoneNubmer(un3Error));
console.log(isPhoneNubmer(un4Error));
