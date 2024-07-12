/**
 * Angol. 2024.07.12
 * Объекты
 * Enhance object literals (85)
 */

const wallet = {
    balance: 0,
    operations: [],

    increase: function(sum, reason) {
        this.balance += sum;
        this.operations.push({
            reason, // название ключа и переменной со значением совапдают
            sum // название ключа и переменной со значением совапдают
        });
        return true;
    },

    decrease: function(sum, reason) {
        if (this.balance < sum) {
            console.log('Недостаточно баланса');
            return false;
        }
        this.balance -= sum;
        this.operations.push({
            reason, // название ключа и переменной со значением совапдают
            sum: -sum
        });
        return true;
    },

    getOperationLenght: function() {
        return this.operations.length
    }
};

console.log(wallet.increase(100, 'Зарплата'));
console.log(wallet.decrease(50, 'Оплата налогов'));
console.log(wallet.getOperationLenght());

console.log(wallet.balance);
