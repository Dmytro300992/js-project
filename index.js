/*'use strict';*/

/*function test() {
    console.log(this);
}
test();

const test2 = function() {
    console.log(this);
}

test2();

console.log(this);

const arrow = () => {
    console.log(this);
}
arrow();*/

/*const newspaper = {
    title: 'Header',
    articles: [
        {
            author: '1 author',
            date: '04-11-2022',
            text: 'lorem'
        },
        {
            author: '2 author',
            date: '04-11-2022',
            text: 'lorem'
        },
        {
            author: '3 author',
            date: '04-11-2022',
            text: 'lorem'
        }

    ],
    showArticles: function() {
        this.articles.forEach((article, index) => {
            console.log(`${this.title} ${index} - ${article.author}`); // Втрата контексту this
        })
    }
}

newspaper.showArticles();*/

/*function sum(a, b) {
    return a + b;
}

const arrow = (a, b) => a + b;


const pow = x => x ** 2;

const SuperFunc = () => {
    this.value = 'hello!';
}

const t1 = function() {
    console.log(arguments);
}

const t2 = () => {
    console.log(arguments);
}*

/*const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);*/

/*const arr1 = [1,5,2,3,4,6,5,8,7];
const arr2 = [10,15,16,78,92];

const concatArray = [...arr1, ...arr2]*/

/*for(let i=1; i <=5; i++) {
    for(let j=1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }
}*/

/*function task(start, end) {
    for(let i = start; i <= end; i++) {
        for(let k = 1; k <= 9; k++) {
            console.log(`${i} * ${k} = ${i * k}`);
        }
    }
}*/

/*const number = [[1,2,3],[4,5,6]];

function sumArray(array) {
    let sum = 0;

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            sum += (array[i][j]);
        }
    }
    return sum;
}

console.log(sumArray(number));*/

/*Домашня практика 04.11.2002

Дано подвійний масив чисел:
const number = [[1,2,3],[4,5,6],[7,8,9]];

Завдання.
Мова про вкладені у масив цикли.
Якщо у парному масиві число парне – замінити елемент масиву рядком 'pp'.
Якщо у парному масиві число непарне – замінити елемент масиву рядком – 'pn'.
Якщо у непарному масиві число парне – замінити елемент масиву рядком – 'np'.
Якщо у непарному масиві число непарне – замінити елемент масиву рядком – 'nn'.

парний масив, парне число – 'pp'. 
непарний масив, парне число - 'np'. 
....
Рядки формувались таким чином.*/

const number = [[1,2,3],[4,5,6],[7,8,9]];

for(let i = 0; i < number.length; i++) {
    console.log(number[i])
    }

    for(let i = 0; i < number.length; i++) {
        for(let j = 0; j < number[i].length; i++)
        console.log(number[i][j])
        
        }