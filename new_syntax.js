/*Задача
class Fuel {
    constructor(volume, density) {
        this.volume = volume;
        this.density = density;
    }

    getWeight() {
        return this.volume * this.density;
    }
}

const diesel = new Fuel(50, 0.9);
const a95 = new Fuel(99, 0.3);

const MIDDLE_WEIGHT_PASSANGER = 80

class Auto {
    constructor(name, ownWeight, fuel) {
        this.name = name;
        this.ownWeight = ownWeight;
        this.fuel = fuel;
        this.passanger = this.passanger;
    }

    getMassa() {
        return this.ownWeight + this.fuel.getWeight() + (this.passanger * MIDDLE_WEIGHT_PASSANGER)
    }
}

const auto = new Auto('Audi', 2500, diesel);
const auto1 = new Auto('Lexus', 2500, a95);*/

class Friend {
    constructor(name, money, friend) {
        this.name = name;
        this.money = money;
        this.friend = friend;
    }

    getFullMoney() {
        if(this.friend === null) {
            return this.money;
        }
        if(Array.isArray(this.friend)) {
            return this.money + this.friend.reduce((sum, friend) => sum + friend.getFullMoney(), 0);
        }
        return this.money + this.friend.getFullMoney();
    }
}

const friend1 = new Friend('Igor', 5, null);
const friend2 = new Friend('Alex', 15, null);


//const friendOfMyFriend = new Friend('Sasha', 25, null);
const myFriend = new Friend('Den', 20, [friend1, friend2]);
const me = new Friend('Dima', 10, myFriend);