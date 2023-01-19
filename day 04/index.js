//E-L1 - 1
// let age  = prompt("Enter your age: ");

// if (age >= 18){
// console.log('You are old enough to drive')
// }
// else{
//     console.log(`You are left with ${18 - parseInt(age)} years to drive`)
// };

// 2
// const myAge = 22;
// let yourAge = prompt('Enter your age: ');

// if (myAge >= yourAge){
// console.log('I am older than you');
// }
// else{
//     console.log(`You are ${parseInt(yourAge) - myAge } years older than me` );
// };

// //3 
let a = 4;
let b = 3; 

if (a > b){
    console.log(`${a} is greater than ${b}`);
}
else{
    console.log(`${b} is less than ${a}`);
}


//4
// // let newnum = prompt('Enter a number:');
// // let evenConv = parseInt(newnum);

// if (newnum % 2 == 0)
// {
// console.log(`${newnum} is an even number`)
// }
// else 
// {
//  console.log(`${newnum} is an odd number`)
// };

//Exercise 2 
let students = prompt("Input your score:");
let studentScore = parseInt(students);

switch (true){
    case studentScore <= 49:
    console.log("You got an F")
    break
    case studentScore == 50 || studentScore <= 59:
    console.log("You got an D")
    break
    case studentScore == 60 || studentScore <= 69:
    console.log("You got an C")
    break
    case studentScore == 70 || studentScore <= 89:
    console.log("You got an B")
    break
    case studentScore == 90 || studentScore <= 100:
    console.log("Congrats! You got an A!")
    break
    default:
        console.log("Wrong input")
};
