const numbers = [15, 27, 33, 43, 52, 64, 79, 86, 90];

// slice 
const numberSlice = numbers.slice(4, 7);
console.log(numberSlice);
console.log(numbers);

// splice 
const numberSplice = numbers.splice(3, 4);
console.log(numberSplice);
console.log(numbers);

const numberSplice2 = numbers.splice(2, 3, 35, 41, 58);
console.log(numberSplice2);
console.log(numbers);