const age = 15;
let isAdult = age < 16 ? 'not adult' : 'adult';
console.log(isAdult);

let login = true;
let viewMode = login ? 'authMode' : 'unAuth';
console.log(viewMode);

let montNumber = 3;

switch(montNumber) {
    case 1: {
        console.log('Сік');
        break;
    }
    case 2: {
        console.log('Чай');
        break;
    }
    case 3: {
        console.log('Кава');
        break;
    }
    case 4: {
        console.log('Чай');
        break;
    }
    case 5: {
        console.log('Лимонад');
        break;
    }
    default: {
        console.log('введіть чісло від 1 до 5');
        break;
    }
}