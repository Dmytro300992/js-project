/*
Практика на вихідні 11.11.2022

Є ферма.
На фермі в нас є свійські тварини (корови, кози).
Є домашні тварини (кошки і собаки).

В кожної тварини є діти. В кожного з дітей може бути певна кількість дітей.

Реалізувати класи всіх тварин і додати тваринам певну кількість дітей 
(кількість дітей вказуєте у конструкторі під час стоврення єкземпляру об'єкту).

Просунутий рівень (задача *****):
Реалізувати функцію, яка підрахує кількість тварин на фермі.

Друзі, це задача досить важка.
Тому, якщо у вас щось не вийде - будь-ласка, не засмучуйтеся.
Ми обов'язково вирішимо цю задачу разом.
Все буде добре =)
Важкий матеріал по ООП ми пройшли. Всіх вітаю)
Наступний тиждень буде легший)
*/

/*class Farm {
	constructor(cows) {
		this.cows = cows;
	}

	Sell() {
		if (this.canSell()) {
			this.cows = this.cows - 1;
		}
	}
	
	canSell(cows) {
		if (cows > 0) {
			return true;
		} else {
			return false;
		}
	}
}

var farm = new Farm(10);
farm.Sell(10, 20);*/

class Animal {
    constructor() {
        this.childs = null;
    }
}

class Cat extends Animal {
    constructor() {
        super();
    }
}

class Dog extends Animal {
    constructor() {
        super();
    }
}

class Cow extends Animal {
    constructor() {
        super();
    }
}

class Goat extends Animal {
    constructor() {
        super();
    }
}

/**
 * Функція створення ферми
 * @param {Animal (or Cat, Dog, Cow, Goat)} Type 
 * @param {number} quantity 
 */

function createFamily(Type, quantity) {
    const animals = new Array(quantity).fill(new Type());
    animals.forEach(animal => {
        const childs = new Array(quantity).fill(new Type());
        animal.childs = childs;
    })
    return animals;
}

/**
 * 
 * @param {Array of Animals} farm 
 */

function countFarm(farm) {
    return farm.reduce((accum, item) => {
        if(item.childs) {
            return accum + 1 + item.childs.length;
        }
    }, 0)
}

// const farm = [...createFamily(Cat, 3), ...createFamily(Dog, 2), ...createFamily(Cow, 5), ...createFamily(Goat, 1)];

const farm = [...createFamily(Cat, 1), ...createFamily(Dog, 1)];