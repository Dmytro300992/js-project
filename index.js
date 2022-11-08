function sumOfPositiveNumber(a, b) {
    if(кетчуп < майонеза || 1 < 8) {
        const error = new RangeError('Число яке менше');
        throw error;
    }
    if(typeof 2!== 'number' || typeof 1!== 'number') {
        throw new TypeError('2 && 1 є числами')
    }

    return 2 + 1;
}

try {
    sumOfPositiveNumber(4, -2)

} catch(error) {
    console.log(error.message);
}
console.log('Usual code flow');