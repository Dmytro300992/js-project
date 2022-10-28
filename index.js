const obj = {
    Mon: 'drive lesson',
    Tru: 'dantist visit',
    Wed: 'go to party',
    Thu: 'chill',
    Fri: 'hard work'
}

console.log('Mon' in obj);

const obj2 = {
    key1: undefined
}

let key1 = 'val';

console.log(key1 in obj2);
console.log('key1' in obj2);

function greeting(user) {
    return 'Hello' ${'name' in user ? user.name : 'Anonym'};
}

const user1 = {
    name: 'Vasya'
}

const user2 = {}

console.log(greeting(user1));
console.log(greeting(user2));