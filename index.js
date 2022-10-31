/*
let userTel1 = '38000014154';
let userTel2 = '46456856666';
let userTel3 = '54654666665';

const userTels = {
    0: '38000014154',
    1: '46456856666',
    2: '54654666665',
}

const arr = [2, 4, 6, 7];
const arr2 = new Array

const array = [7, 3, 5, 2];
array[0];
array[1];
array[2];
array[3];

for (let i = 0; i < array.length; i++) {
    console.log(
        array[i]

    )

}
*/

/*Задача 1*/
/*const arr1 = [1, 2, 3]
function sumArray(array) {
    let sum = 0;

    for(let i = 0; i < array.length ; i++) {
        sum = sum + array[i]
    }

    return sum;
}

console.log(sumArray(arr1));*/

/*Задача 2*/
/*const array = [2, 3, 6, 8, 5];
function bigArray(array) {
    let max = num3 = 6, num4 = 8;

    if (num3 > num4) {
    } else {
        num3 = num4;
    }

    return max;
}

console.log(bigArray(array));*/

/*
Задача 3
Написати функцію, яка знаходить середнє арифметичне всіх елементів масиву.
[3, 6, 8, 2, 3, 5, 1] // 4
*/

function average(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        if(typeof array[i] === 'number') {
            sum += array[i]
        }
    }
    return sum / array.length;
}


console.log(average(arr1));