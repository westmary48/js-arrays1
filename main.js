const cats = ['fluffy', 'spike', 'killer'];
console.log('1st cat', cats[0]);

//split
const favoriteAnimals = 'cow, bear, dog, cat';
const favoriteAnimalArray = favoriteAnimals.split(','); //['c', 'o', 'w']
console.log('favortieAnimalArray', favoriteAnimalArray);

//join

const numArray = [1, 2, 3, 4, 5];
const newNum = numArray.join('');
console.log('newNum', newNum);

//mini challenge

const palChecker = (word) => {
const wordArray = word.split('').join('');
const reverseArray = word.split('').reverse().join('');

if(wordArray === reverseArray){
    console.log(`${word} IS a palindrome`);
} else {
console.log(`${word} NOT a palindrome`);
}


};

palChecker('mom'); //yes
palChecker('mary'); //no
palChecker('racecar'); //yes
//yes if its palindrome


let animals = ['snakes', 'spiders', 'bears', 'birds', 'bees'];

const lastItem = animals.pop(); //bees
const firstItem = animals.shift(); //snakes
animals.push('bat');
console.log('animals', animals); 

// For loops things you need to know 
// 1.) whats your starting value 
// 2.) what is your stopping value
// 3.) how are you incrementing -1 +1

for(let i = 0; i<animals.length; i++){
    //do something here
    console.log(animals[i]);
}