//slice
/*const array = [1, 2, 3, 4,];

console.log(array.slice(3));
console.log(array.slice(2));

const users = [
    {
        name: 'John',
        lastName: 'Doe'
    },
    {
        name: 'Jane',
        lastName: 'Doe'
    },
]*/

//mutattion
/*const user = {
    name: 'Humty Dum'
}

user.isBroken = false;

const egg = 'Humty Dum';
egg.isBroken = false;
console.log(egg);
console.log(egg.isBroken);*/

//splice
const arr = [1, 2, 3, 4, 5];

//console.log(arr.splice(2,1));
//console.log(arr);

console.log(arr.splice(1, 0, 'hello'));
console.log(arr);