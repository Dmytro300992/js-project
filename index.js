/*function MyArray() { // функція-конструктор масивів
    this.length = 0;
}

function myProtoArray() {
    this.push = function() {
        for(let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;
    },
    this.pop = function() {
        if(this.length > 0) {
            let lastItem = this[this.length - 1];
            delete this[this.length - 1];
            this.length--;
            return lastItem;
        }
    }
}

MyArray.prototype = new myProtoArray;


const arr = new MyArray();*/

/*Задача*/
/*
LADDER

Задача: створити функцію-конструктор для сходів
Об'єкт має властивість
currentStair // сходинка, на якій ми зараз знаходимось. Початково = 0

Має методи:
up() - піднімає на сходинку вище
down() - опускає на сходинку нижче
showStair() - показує, на якій сходинці ми зараз знаходимось
*/

function Ladder() {
    this.currentStair = 0;
}

function LadderProto() {
    this.up = function() {
        this.currentStair++;
        return currentStair;
    }
    this.down = function() {
        this.currentStair--;
        return currentStair;
        }

    this.shownStair = function() {
        return this.currentStair;
    }
}

Ladder.prototype = new LadderProto;