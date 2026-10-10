const sentence = 'I am a good and hardworking person';
console.log(sentence.split('a'))

const address = 'andorkilla';
const part = address.slice(1, 4);
console.log(part);


const friendsStr = 'Rahim, Karim, jabar,sattar'
const friends = friendsStr.slice(',');
console.log(friends);



const realFriends = ['Rahim', 'Karim' ,'jabar', 'sattar']
console.log(realFriends.join('-'));



const first = 'Abid'
const last = 'Nabid'
const fullName = first + ' ' + last
console.log(fullName)
