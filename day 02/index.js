let challenge = '30 Days of Javascript';
let brands = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let challenge2 = "30 Days of Javascript";
let challenge3 = 'You cannot end a sentence with because because because is a conjunction';
let challenge4 = 'You cannot end a sentence with because because because is a conjunction';

console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(3,21));
console.log(challenge.substring(0,3));
console.log(challenge.includes('script'));
console.log(challenge.split(' '));
console.log(brands.split(" "));
console.log(challenge2.replace("Javascript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
console.log(challenge3.indexOf("a"));
console.log(challenge3.lastIndexOf("a"));
console.log(challenge4.search('because'));
console.log(challenge.trim(" "));
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("t"));
console.log(challenge.match('a'));
console.log(challenge.concat(" approved"));
console.log(challenge.repeat(2));

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);

let num = "10";
let newNum = parseInt(num);

console.log(newNum);

let floatNum = "9.8";
let newFloatNum = parseFloat(floatNum);
let roundFig = Math.round(newFloatNum);

console.log(floatNum === 10);
console.log(roundFig === 10);

let newword = "python, jargon";

console.log(newword.includes("on"));

let phrase = "I hope this course is not full of jargon. Check if jargon is in the sentence.";
console.log(phrase.includes("jargon"));

let randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber);


let randomNum = Math.floor(Math.random() * 51 + 50);
console.log(randomNum);

let myString = 'JavaScript';
let randomIndex = Math.floor(Math.random() * myString.length);
let randomChar = myString[randomIndex];
console.log(randomChar);
