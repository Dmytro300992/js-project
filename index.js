//staticMethod

/*class Test {
    constructor(value1, value2) {
        this.key1 = value1;
        this.key2 = value2;
    }

    method() {

    }

        static newMethod2(value) {
            console.log('Статичний метод всередині класу')
        }

    }


Test.newMethod = function() {
    console.log('Статичний медод пока класом');


}

const obj1 = new Test();
obj1.method();*/

/*Практика 10.11.2022

Задача 1

Напишіть клас RangeValidator
дві властивості:
from, to

from не може бути більше to

Завдання:
1. реалізувати сеттери для обох властивостей
2. геттер getRange, який має повертати масив цілих чисел цього діапазону*/

/*
class RangeValidator {
    constructor(from, to) {
        this.to = to; // this._to
        this.from = from;
    }

    set from(value) {
        if(typeof value !== 'number') {
            throw new TypeError('From must be a number');
        }
        if(value > this._to) {
            throw new RangeError('To must be a larger than from')
        }
        this._from = value;
    }

    set to(value) {
        if(typeof value !== 'number') {
            throw new TypeError('To must be a number');
        }
        this._to = value;
    }

    get to() {
        return this._to;
    }

    get from() {
        return this._from;
    }

    get getRange() {
        const arr = [];
        for(let i = this._from; i <= this._to; i++) {
            arr.push(i);
        }
        return arr;
    }

    validate(num) {
        return this.getRange.includes(num);
    }
}
*/

/*
class Animal {
    constructor(color, name, tail) {
        this.name = name;
        this.color = color;
        this.tail = tail;
    }

    eat() {
        return `${this.name} is eating`
    }
}

class Dog extends Animal {
    constructor(color, name, tail) {
        super(color, name, tail);
    }

    barking() {
        return `${this.name} is barking`
    }
}
*/

class User {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Moderator extends User {
    constructor(name, surname, age) {
        super(name, surname, age);
    }

    createPost(header, text) {
        console.log('Create post')
    }

    deletePost(index) {
        console.log('Delete post')
    }
}

class Admin extends Moderator {
    constructor(name, surname, isAdmin) {
        super(name, surname, null);
        this.isAdmin = isAdmin;
    }

    setModerator() {
        console.log('Set moderator')
    }

    deleteModerator() {
        console.log('Delete moderator')
    }
}