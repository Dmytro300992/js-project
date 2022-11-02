/*Задача 5*/
const users = [
    {
        name: 'John',
        lastName: 'Doe',
        age: 18,
        email: 'meil@com'
    },
    {
        name: 'Jane',
        lastName: 'Doe',
        age: 20,
        email: 'meil@com'
    },
    {
        name: 'Josh',
        lastName: 'Doe',
        age: 17,
        email: 'meil@com'
    },
    {
        name: 'Jake',
        lastName: 'Doe',
        age: 21,
        email: 'meil@com'
    },
    {
        name: 'Jackson',
        lastName: 'Doe',
        age: 17,
        email: 'meil@com'
    },
]

function newUserObject(user) {
    return {
        fullName: `${user.name} ${user.lastName}`,
        age: user.age,
        email: user.email
    }
}

const newUsersArray = users.map(newUserObject);
/*Задача 4*/
/*const arr = [2, 44, 11, 234, 8, 2, 4, 1];
//const arr2 = [2, 8, 2];
//const arr3 = [4, 1];

const newArray = arr.map((item) => {
    return item ** 8;
});

//const newArray2 = arr2.map((item) => {
    //return item ** 4;
//});

//const newArray3 = arr3.map((item) => {
    //return item ** 6;
//});*/


/*Задача 5*/
/*const users = [
    {
        name: 'John',
        lastName: 'Doe',
        age: 18,
        email: 'meil@com'
    },
    {
        name: 'Jane',
        lastName: 'Doe',
        age: 20,
        email: 'meil@com'
    },
    {
        name: 'Josh',
        lastName: 'Doe',
        age: 17,
        email: 'meil@com'
    },
    {
        name: 'Jake',
        lastName: 'Doe',
        age: 21,
        email: 'meil@com'
    },
    {
        name: 'Jackson',
        lastName: 'Doe',
        age: 17,
        email: 'meil@com'
    },
]

//console.log(users.slice(name, lastName));
//console.log(users);*/