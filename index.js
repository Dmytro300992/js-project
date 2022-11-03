/*MyAraay*/
/*function MyArray() {
    this.length = 0;

    this.push = function(value) {
        // push - добавляет єлемент, которій нам передают в конец массива
        // изначально, длина массива (this.length = 0)
        // куда добавлять? = что нам нужно добавить?
        // this[this.length] = value;
        // this.length++;

        this[this.length] = value; // this[key] = value
        this.length++;
        return this.length;
    }

    this.pop = function() {
        if(this.length > 0 ) {
            let lastItem = this[this.length - 1];
            delete this[this.length - 1];
            this.length--;
            return lastItem;
        } 
    }
}

const arr = new MyArray();*/

const cat = {
    name: 'Barsik',
    color: 'red',
    age: 1
};

const catMethods = {
    run: function() {
        console.log('Cat is running');
    },
    meow: function() {
        console.log('Meow');
    }
}

cat.__proto__ = catMethods;