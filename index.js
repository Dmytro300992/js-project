/*function t() {
console.log(arguments);
}

console.log(t);
console.dir(t);

t(1,2,3,4,5);

function sum(a,b) {
    console.log(arguments);
    return a + b;
}

console.log(sum(2, 6, 23, 65, 123, 3432));*/

/*Задача
const array = [5,9,3,7,10];

function compareFunction(a, b) {
    if (b > a) {
        return -1;
    } else {
        return 1;
    }
}
array.sort(compareFunction);
console.log(array);*/

const arrayWorlds = ['bbb', 'aba'];

arrayWorlds.sort();
console.log(arrayWorlds);

/*Задача
const array = [5,3,9,21,5,1,2,4,56];

function compareFunction(a, b) {
    if (b < a) {
        return -1;
    } else {
        return 1;
    }
}
array.sort(compareFunction);
console.log(array);*/

//filter

const array = [2, 16, 20, 80, 5];

function filterFunc(item) {
   if(item > 0) {
          return true;
   } else {
        return false;
   }
}

const filteredArray = array.filter(filterFunc);