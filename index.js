let userTel1 = '3805465465465';
let userTel2 = '3805165161565';
let userTel3 = '4654351321232';

const userTels = {
    0: '3805465465465',
    1: '3805165161565',
    2: '4654351321232'
}

// Array

const arr = [2, 4, 6, 7];
const arr2 = new Array(2, 4, 6, 7);

///////


// вивести значення всіх елементів масиву array на єкран
const array = [7, 3, 5, 2];
array[0];
array[1];
array[2];
array[3];

for (let i = 0; i < array.length; i++) {
    console.log(
        array[i]
    );
}

/*
Задача 1
Дан масив [3, 6, 8, 2, 3, 5, 1].
Напишіть функцію, яка приймає масив в якості аргументу і повертає суму всіх елементів масиву.
Наприклад: [1, 2, 3] // sum: 1 + 2 + 3 = 6
*/
const arr1 = [3, 6, 8, 2, 3, 5, 1];

function sumArray(array) {
    let sum = 0;

    for(let i = 0; i < array.length ; i++) {
        if(typeof array[i] === 'number') {
            sum = sum + array[i];
        }
    }

    return sum;
}

console.log(sumArray(arr1));

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