/**
 * Angol. 2024.07.12
 * Объекты
 * Упражнение - кошелек (84)
 */

// Реализовать методы увеличения и уменьшения баланса,
// при котором кфждая операция сохраняется в массив
// operations в виде { reason: 'Оплата налогов', sum: -100 }.
// Возвращается true, если успешно и false, если не хватает баланса
// Так же реализовать метод вывода числа операций по кошельку

const wallet = {
    balance: 0,
    operations: [],

    // Мое решение:
    profit: function(reason, sum) {
        this.balance += sum;
        this.operations.push({reason: reason, sum: sum});
        return true;
    },

    // Решение преподавателя:
    increase: function(sum, reason) {
        this.balance += sum;
        this.operations.push({
            reason: reason,
            sum: sum
        });
        return true;
    },

    // Мое решение:
    spending: function(reason, sum) {
        if (this.balance < sum) {
            return false;
        }
        this.balance -= sum;
        this.operations.push({reason: reason, sum: sum * -1});
        return true;
    },
    // Решение преподавателя:
    decrease: function(sum, reason) {
        if (this.balance < sum) {
            console.log('Недостаточно баланса');
            return false;
        }
        this.balance -= sum;
        this.operations.push({
            reason: reason,
            sum: -sum
        });
        return true;
    },
    
    // Мое решение:
    viewOperation: function() {
        return this.operations.length;
    },

    // Решение преподавателя:
    getOperationLenght: function() {
        return this.operations.length
    }
};

console.log(wallet.profit('Зарплата', 100));
console.log(wallet.spending('Оплата налогов', 50));
console.log(wallet.viewOperation());

console.log(wallet.balance);
