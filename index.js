/*Задача 1*/
/*const arr = [1, 2, 3, 4, 5];
arr.splice(3, 4);*/

/*Задача 3*/
/*const arr = [1,2,3,4,5];

console.log(arr.splice(1, 0, 'w' ));
console.log(arr.splice(2, 0, 're-td' ));
console.log(arr.splice(7, 0, 'vv' ));
console.log(arr.splice(6, 0, 'aa' ));
console.log(arr)*/


/*arr.splice(1,0,'w','re-td');
arr.splice(6,0,'vv');
arr.splice(8,0,'aa');
console.log(arr);*/

/*Задача 4*/

/*const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 2, 3, 4];

function number(arr5, arr10) {
    if(arr1 === true) {
        return true;
    }
    if(arr2 == false) {
        return false;
    }
}

console.log(number());*/

/*function saySomething(howToSay, whatToSay) {
    howToSay(whatToSay);
}

saySomething(alert, 'Hello');
console.log(saySomething);*/

//map metod
function square(a) {
    return a*a;
}

const array = [1,2,3,4,5];

const newArray = array.map((item) => {
    return item ** 2;
})