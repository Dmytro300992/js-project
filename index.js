/*
Переделать под class

function MyArray() {
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



/*class MyArray {
    constructor() {
        this.length = 0;
    }
    
    push() {
        for(let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
    }
    return this.length;
}

pop() {
    if(this.length > 0) {
        let lastItem = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
    }
    return lastItem;
}

forEach(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

map(callback) {
    const newArr = new MyArray();
    for(let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i]))
    }
    return newArr;*/
    

    const b1 = true;
    const b2 = new Boolean(1);

    const str = 'hello';
    const str2 =  new String('hello');

    const MySymbol = Symbol();
   // const symb2 = Symbol('My second symbol');

    const obj = {
        test: 1,
        [MySymbol]: 123,
        ab: '2123'
    }