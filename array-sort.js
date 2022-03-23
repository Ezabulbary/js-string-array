const singelNumbers = [4, 6, 2, 1, 9, 4, 6, 8];
const sortSingelNumbers = singelNumbers.sort();
console.log(sortSingelNumbers);

const friends = ['shakil', 'ahifat', 'sagar', 'mehedi', 'babul', 'comar'];
const sortFriend = friends.sort();
console.log(sortFriend);

// reverse
const sortFriend2 = friends.reverse();
console.log(sortFriend2);

const sortFriendReverse = friends.sort().reverse();
console.log(sortFriendReverse);

// number sorted 
const numbers = [1, 4, 2, 24, 66, 99, 121, 112, 134, 5];
const sortNumber = numbers.sort(function(a ,b){
    return a - b;
});
console.log(sortNumber);