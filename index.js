/*Домашня практика 03.11.2022

Зробити функцію-конструктор об'єкту Accumulator, який приймає певне початкове 
значення при створенні

new Accumulator(startingValue)
має властивість 
value

має метод read(), який за допомогою prompt приймає від користувача 
чтсло та додає його до value, повертає значення поточного value
(перевірка на число)*/

function Accumulator(startingValue = 0) {
    this.value = startingValue;
}

function AccumulatorProto() {
    this.read = function() {
        const userValue = Number(prompt('Введіть число'));

        if(Number.isNaN(userValue)) {
            console.log('Не число');
        } else {
            this.value += userValue;
        }
    }
}

Accumulator.prototype = new AccumulatorProto();