for (i = 0; i < 10; i = i + 3) {
    console.log(i);
}

function factorial(num) {
    if(num < 0) {
        return null;
    }
    if (num === 0 || num === 1) {

    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));