const users = [
    { name: 'ілля', balance: 1000, friends: ['олена', 'максим'], skills: ['HTML', 'CSS', 'javaScript'] },
    { name: 'олена', balance: 2000, friends: ['ілля', 'марія', 'артем'], skills: ['CSS', 'react', 'node.js'] },
    { name: 'максим', balance: 1500, friends: ['марія'],  skills: ['javaScript', 'node.js', 'python'] },
    { name: 'марія', balance: 3000, friends: ['олена'], skills: ['python', 'HTML', 'CSS'] }
];

const getTotalBalance = users => 
    users.reduce((total, user) => total + user.balance, 0); 

console.log(getTotalBalance(users)); 


const getUsersWithFriend = (users, friendName) => 
    users
        .filter(user => user.friends.includes(friendName)) 
        .map(user => user.name);

console.log(getUsersWithFriend(users, 'марія')); 
console.log(getUsersWithFriend(users, 'олена')); 


const getNamesSortedByFriendsCount = users => 
    users
        .sort((a, b) => a.friends.length - b.friends.length)
        .map(user => user.name); 

console.log(getNamesSortedByFriendsCount(users));


const getUniqueSortedSkills = users => 
    users
        .flatMap(user => user.skills) 
        .filter((skill, index, arr) => arr.indexOf(skill) === index) 
        .sort(); 

console.log(getUniqueSortedSkills(users));