const numbers = [15, 27, 33, 43, 52, 64, 79, 86, 90];
const numberSlice = numbers.slice(4, 7);
console.log(numberSlice);
console.log(numbers);

// splice 
const numberSplice = numbers.splice(3, 4);
console.log(numberSplice);
console.log(numbers);