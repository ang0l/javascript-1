/**
 * Angol. 2024.07.20
 * Scope и this
 * Упражнение - объект в объекте (106)
 */

'use strict';

// дополнить объект методами для получения имени:
// - компании;
// - сео;
// - сотрудника;

const company = {
    name: 'ООО Агро',
    employees: [
        {
            name: 'Света',

            getName: function() {
                return this.name;
            }
       }
    ],
    ceo: {
        name: 'Вася',

        getName: function() {
            return this.name;
        }
    },

    getName: function() {
        return this.name;
    }
}

console.log(company.getName());
console.log(company.ceo.getName());
console.log(company.employees.map(employee => employee.getName()));
