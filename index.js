/* Binary search algoritm
const arr = [2, 4, 5, 6, 8, 9, 5, 1, 3];

function linearSearch(arr, value) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }

    return -1;
}

function multyTable(limit) {
    const table = [];
    for(let i = 1; i <= limit; i++) {
        for(let j =1; j <= limit; j++) {
            table.push(`${i} * ${j} = ${i*j}`)
        }
    }

    return table;
}

const arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(array, whatToFind) {
    if(whatToFind > array[array.length-1]) {
        return -Infinity;
    }

    let start = 0;
    let end = array.length-1;
    let middle = Math.round(start + end / 2);

    while(true) {
        if(array[middle] === whatToFind) {
            return middle;
        }
        if(array[middle] < whatToFind) {
            start = middle;
            middle = Math.ceil(start + end / 2);
        } else {
            end = middle;
            middle = Math.ceil(start + end / 2);
        }
    }
}
*/

/*Stack*/

class Stack {
    constructor(maxSize) {
        this._maxSize = maxSize;
        this._size = 0;
    }

    get isEmpty() {
        return this._size === 0;
    }

    get size() {
        return this._size;
    }

    set size(value) {
        throw new Error('Access denied');
    }

    set maxSize(value) {
        throw new Error('Access denied');
    }

    push(value) {
        if(this.size >= this._maxSize) {
            throw new Error('Stack overflow');
        }
        this[`_${this.size}`] = value;
        this._size++;
        return this.size;
    }

    pop() {
        if(this.size > 0) {
        const lastItem = this[`_${this.size - 1}`];
        delete this[`_${this.size - 1}`];
        this._size--;
        return lastItem;
        }
    }

    pick() {
        return this[`_${this.size - 1}`]
    }
}

const myStack = new Stack(4);

/*Задача*/

/*Задача: написати функцію, яка приймає рядок, що містить дужки і повертає true, якщо дужки правильно парно
відкриваються і закриваються. false - якщо порядок порушений
Дужки можуть бути такі: (), {}, [], <>
*/


/*
1. Створюємо структуру, де будемо зберігати ось ці всі дужки.
2. Перебираємо рядок.
3. Якщо ми зустріли дужку, яка відкривається, покласти її в стек.
4. Якщо ми зустріли дужку, що закривається, проаналізувати її:
    - порівняти, чи є оця закриваюча дужка парною до останнього елементу стеку
    - якщо так, то видалити відкриваючу зі стеку
    - якщо ні, то повертаємо помилку
5. Проаналізувати, чи залишилось щось у стеку. Якщо рядок закінчився (після перебору), а в стеку щось залишилося
то порядок був неправильний. Якщо стек пустий, то все нормально (порядок був правильний)
На базовому рівні ваша функція має працювати тільки з дужками.
Додатково (**): ігнорувати всі символи, крім дужок (щоб можна було крім дужок передавати ще щось, наприклад, числа)
*/

function checkSequence(str) {
    let res = 0;
    for (const symbol of object) {
        if(symbol === '(') {
            res++;
        }
        if(symbol === ')') {
            res--;
        }
 }
 return res === 0;
}