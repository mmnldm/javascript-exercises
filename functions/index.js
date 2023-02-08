const log = console.log;

function createFunc(){
alert('New life');
}
createFunc();

// local variable 

function createLocal(){
    let message = 'new world';

    console.log(message);
}
createLocal();

// global variable 

let username = "Emery";

function getName(){
    console.log(`Hi my name is ${username}`);
}
getName();

//modify global variable 
let userName = "John";
function newName(){
    userName = "Angel";

    console.log(`New name ${userName}`);
}
console.log(userName);
newName();
console.log(userName);

// * parameters 

function multiply(a, b){
    console.log(a * b);
}
multiply(2, 3);

function showMessage(from, text){
    console.log(`This is from ${from} to ${text}`);
}
showMessage('Emery', 'Emmanuel');

function showText(from, text){
    from = '$$$' + from + '$$';

    // * I can change how the parameter will be passed when called 

    console.log(`Trying out code ${from} to ${text}`);
}

let from = "Emery";

showText(from, 'Emmanuel');

// * default value


function showTexter(from, text){
    console.log('could this be empty?', from, text);
}
showTexter('pointer');


function getTape(n,c){
    let total = n * c;
    return total;
}
log(getTape(3,3));

function getArea(r){
    let area = Math.PI * r * r;
    return area;
}
log(getArea(5));
log(getArea(40));

function getNewArea(d){
    log(Math.PI * d * d);

}
getNewArea(4);

// * returning values
function getArea2(r){
    let result = Math.PI * r *r;
    return result;
}

const res = getArea2(5)
console.log(res)

function getArea3(r){
    let newfucker = getArea2(2) * 3;
    return newfucker;
}
 log(getArea3(3));

 //hoe ass nigga
 // * trust you to drop something very stupid stupid ass bitch 
 //lmao
 //btw....does garri and cashew nut go together
 // discoveries are made everyday, be an inventor today!😂😂😂
 //lol okay
 //tell me if it is great sha 
 //sure sure
 //thanks lol i still dont get it but  thanks
 //no probs, you'll get it later
 //bye
 
 function fN (){
    let firstName = 'Emery';
    let lastName = 'Edem';
    let location = 'Calabar';
    let age = '22';
    let fullName = firstName + ' ' + lastName + ' ' + location + ' ' + age;
    return fullName;
 }
 log(fN());

 function sum(a,b){
    return a + b;
 }
log(sum(1,2));
const pose = sum(1,3);
log(pose);

function addTwoNumbers(){
    let num1 = 10;
    let num2 = 20;
    let sum = num1 + num2;
    return sum;
}
log(addTwoNumbers());

function sumArrayValue(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
const numberss = [1,2,3,4,5];
log(sumArrayValue(numberss));

let fruits = ['apple', 'mango', 'pineapple', 'guava']
for(let i = 0; i < fruits.length; i++){
    log(fruits[i]);
}

function sumAllSums(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

log(sumAllSums(1,2,3,4,5));

// * answering js task 
 function myFullName(myFirstname, myLastName){
    return (`My full name is ${myFirstname} ${myLastName}`);
 }
 log(myFullName('Emery','Edem'));

 function addNumbers(numero1, numero2){
        return sum = numero1 + numero2;
 }
 log(addNumbers(2000,23));

 function areaOfRectangle(length, width){
    let area = length * width;
    console.log(`The area of the rectangle is ${area}`);
    return area;
    
 }
 areaOfRectangle(20, 40);

 function perimeterOfRectange (length,width){
    let perimeter = 2 * (length * width);
    console.log(`The perimeter of the rectangle is ${perimeter}`);
    return perimeter;
 }
 perimeterOfRectange(10,20);


//  function volumeRectPrism(){
// let length = prompt('Input length:', 0);
// let width = prompt('Input width:', 0);
// let height = prompt('Insert height', 0);

// let volume = (Number(length) * Number(width) * Number(height));
// console.log(`The volume is ${volume}`);
// return volume;

//  }
//  volumeRectPrism();

 function areaOfCircle(radius){
    const pi = Math.PI;
    let area = pi * radius * radius;
    console.log(`The area of circle with ${radius} is ${area}`);
    return area;
 }
 areaOfCircle(20);

 function circOfCirc(r){
    let circ = 2 * Math.PI * r;
    log(`The circ of circle with ${r} is ${circ}`);
    return circ;
 }
 circOfCirc(12);

 function density(mass, volume){
    let density = mass / volume;
    console.log(density);
    return density;
 }
 density(122, 120);

 function speed(distance,time){
    let totalDistance = distance / time;
    console.log(`The speed is ${totalDistance}`);
    return totalDistance;
 }
 speed(100,12);

 function convertCelsiusToFahrenheit(oC){
    let oF = (oC * 9 /5) + 32;
    console.log(`${oC} C is converted to ${oF} F`)
    return oF;
 }
convertCelsiusToFahrenheit(-49);


 //*  bmi = weight in Kg / (height x height) in m2
 
//  function BMI(){
//     let getUserWeight = prompt("What is your weight: ", 'kg');
//     let getUserHeight = prompt("What is your Height: ", 'ft');
    
//     let bmi = parseFloat(getUserWeight) / (getUserHeight * getUserHeight);
    
//     if(bmi < 18.5){
//         alert(`You are underweight`);
//     } else if (bmi === 18.5 || bmi <= 24.9 ){
//         alert(`You have a normal weight`);
//     } else if(bmi === 18.5 || bmi <= 29.9 ){
//         alert(`You are Overweight`);
//     } else if(bmi >= 30 ){
//         alert(`You are obese and you need to see a doctor`);
//     }
//     else{
//         alert(`Incorrect input`);
//     }
//     return bmi;
//  }
 
//  BMI();

 let findMax = function (a,b,c){
    let max = a;
    if(b > max){
        max=b;
    }
    if(c > max){
        max=c;
    }
    return max;
 }

 const finalMax = findMax(1,23,3);
 log(finalMax);

 let newCode = function(){
    return finalMax * 223;
 }
 
 const newVibe = newCode();
 log(newVibe);

 let printArray = function(array){
    for (let i = 0; i < array.length; i++){
         log(array[i]);
    }
    return array;
 }
 let rays = ['Bad Bunny','Rosalia','Maluma'];
 printArray(rays);

//  let showDateTime = function (){
//     const now = new Date();
//     let years = log(`${now.getDay()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);
//     let times = log(``);

//     let fullYEARS = years + times;
//     return fullYEARS;
//  }

//  showDateTime();

function swapValues(x, y) {
    
    [x,y] = [y,x];
    log(`x = ${x}, y = ${y}`);
  }
swapValues(3,4);

function min (a,b){
    if (a < b){
        return a;
    } else{
        return b;
    }
}
log(min(3,100));

// * my solution 
function pow(x,n){
    let xx = prompt("Enter x:", 0);
    let nn = prompt("Enter n:", 0);

    let calc = Math.pow(xx,nn);
    alert(calc);
    return calc;
}
 pow();

