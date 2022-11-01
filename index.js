/*28.10.2022
Задача 3*/

const obj = {
    Mon: 'driver lesson',
    Tue: 'dantist visit',
    Wed: 'go to party',
    Thu: 'chill',
    Fri: 'hard work',
    Sat: 'go to park'
}

let userValue = prompt('Type your week day your plan: \n Monday = Mon, \n Tusdey = Tue ... e.t.c');
alert(obj[userValue] ? obj[userValue] : 'Nothing planned');

/*Задача 4
Написати функцію, яка повертає загальну суму, витрачену на зарплатню всіх відділів
const departmentSalary = {
    HR: 20000,
    Development: 30000,
    Drive: 200,
    Clining: null,
    Marketing: 'not salary'
}
(for .. in)*/

const departmentSalary = {
    HR: 20000,
    Development: 30000,
    Drive: 200,
    Clining: null,
    Marketing: 'not salary'
}

function sumSalary(salaryObj) {
    let result = 0;

    for(let key in salaryObj) {
        if(typeof salaryObj[key] === 'number') {
            result = result + salaryObj[key];
        }
    }

    return result;
}

console.log(sumSalary(departmentSalary));

/*
Задача 5
Написати функцію, яка приймає об'єкт і виводить всі значення всіх властивостей, оформлені у *....*
const obj = {
    key1: value2
}
// "key1": *value2*
(for ... in)
*/


function stylingConsole(obj) {
    for(let key in obj) {
        console.log(`"${key}": *${obj[key]}*`);
    }
}

stylingConsole(obj);