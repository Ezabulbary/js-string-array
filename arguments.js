function addNumbers(num1, num2){
    let result = 0;
    for(const num of arguments){
        result = result + num;
    }
    return result;
};

const sum = addNumbers(10, 21, 32, 3, 234, 333);
console.log(sum);

function getFullName(firstName, lastName){
    let fullName = '';
    for(const name of arguments){
        fullName = fullName + name + ' ';
    }
    return fullName;
};

const names = getFullName('ezabul', 'bari', 'bin', 'ataul', 'bari');
console.log(names);