function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return 'Please provide an array';
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
};

const friends = ['shakil', 'shifat', 'sojol', 'mehedi', 'sagor'];
const myBiggBuddis = megaFriend(1932);

console.log(myBiggBuddis);


// indexOf 
if(friends.indexOf('sagors') != -1){
    console.log('sagor is exist')
}
else(
    console.log('sagor not in exist')
);

// includes
if(friends.includes('mehedi')){
    console.log('mehedi is exist');
};

// concat
const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8, 9, 10];
const combined = first.concat(second);
console.log(combined);