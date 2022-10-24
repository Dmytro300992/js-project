//alert('Hello'); //

let a = Number(prompt('Введіть перше число')); // Вікно з формой для вводу певного рядка
let b = Number(prompt('Введіть друге число'));
let result = 4 + 5;

if(Number.isNaN(result)) {
    console.log('Ти не правий, введи число!');
} else {
    console.log(result);
}