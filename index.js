//concat
const arr = [1, 2, 3];
const arr2 = [5, 8, 0];
const arr3 = arr.concat(arr2); // arr3 = arr1 + arr2

// fill
const arrFive = new Array(5);
arrFive.fill(1);

// includes
const arr6 = [2, 4, 1, 3, 6, 3, 7];
console.log(arr6.includes(6));
// indexOf
console.log(arr6.indexOf(3));

// join
const newArr = ['Hello', 'world', 4, 2, 'hi'];
console.log(newArr.join(' ')); // default separator - ','

// push
const oldArray = [2, 3, 4, 5];
oldArray.push(6);

// pop
const anotherArray = [5, 6, 7, 8];
anotherArray.pop();

// shift
console.log(anotherArray.shift());

// unshift
anotherArray.unshift(3, 6, 55);

// reverse
const arr10 = [1, 2, 3, 4, 5, 6];
arr10.reverse();