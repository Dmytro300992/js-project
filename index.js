/*'Привіт'
"Привіт"
`Привіт`*/

/*
let name = 'Вася';
alert(`Привіт, ${name}`);
*/

/*const one = Number(prompt('One number'))
const two = Number(prompt('Second number'))

alert(`${one} + ${two} = ${one + two}`);*/

/*Задача 1*/

// У нас є функція
/*function greetingUser(user) {
    user.age = 20
    return `Hey ${user.name} ${user.surname}. You will be ${user.age + 1} next year. `
}

// та у нас є об'єкт
const user = {
    name: 'John',
    surname: 'Doe',
    age: 15
}

console.log(greetingUser(user));*/

const user = {
    'name': 'John', // Ключ 'name', значення - 'John'
    'favorite color': 'red',
    0: 'value'
}

/* Ключ в об'єкті може бути рядок або тип даних Symbol */


// . - оператор доступу за ім'м властивості

// user.name // 'John'
// user.'favorite color' // syntax error
// user.0 // syntax error

// [] - Оператор доступу до обчислювальної властивості (Computed property)

let name = 'Sam';

user[name]; // === user.Sam
user['favorite color'] // red
user[0]; // 'value'


/////////////////////////////////////////////

let key = 'a';


const obj = {
    a: 5
}

obj.key // undefined
console.log(obj[key]); // 5


//////////////////////////////////////////////

const someObj = {
    2: 10
}

// someObj.2 // syntax error
someObj[2] // 10
someObj['2']; // 10

const greets = {
    15: 'Hi',
    17: 'Ya, whats up',
    18: 'Hello',
    30: 'Good morning',
}

greets[18]