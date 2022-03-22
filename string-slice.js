const anthem = 'amar sonar bangla ami tomai valobasi';

// split 
const word = anthem.split('');
const spaceBlank = anthem.split(' ');
const withoutA = anthem.split('a');
console.log(withoutA);

// slice
const smallSlice = anthem.slice(5, 11);
console.log(smallSlice);

// substr 
const smallSubSlice = anthem.substr('5, 12');
console.log(smallSubSlice);

// substring
const anatherPart = anthem.substring(11, 17);
console.log(anatherPart);

// concat
const first = 'Amader';
const second = 'city';
const together = first + second;
console.log(together);

// or concat 
const allTogether = first.concat(second);
console.log(allTogether);

// join 
const words = ['a', 'b', 'c', 'd', 'e', 'f'];
const allJoin = word.join('');
console.log(allJoin);