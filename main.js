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

