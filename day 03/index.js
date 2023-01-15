//1. 
let firstName = "Emery";
let lastName = "Edem";
let country = "Nigeria";
let city ="Calabar";
let age = 23;
let isMarried = true;
let year = 2023;

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

//2.
console.log('10' === 10);

//3. 
console.log(parseInt('9.8') === 10);

//4. 
let truthy = 3 - 6;
console.log(truthy);
let truthy1 = -3 - 6;
console.log(truthy);
let truthy3 = 3 + 6.9;
console.log(truthy3);

//5. 
let first = "python";
let second = "jargon"; 

let compare = first.length != second.length;
console.log(compare);

//6. 
const newday = new Date;
console.log(newday.getFullYear());
console.log(newday.getMonth() + 1);
console.log(newday.getDate());
console.log(newday.getDay());
console.log(newday.getHours());
console.log(newday.getMinutes());
console.log(newday.getMinutes());
console.log(newday.getTime());

/* Exercise 2 
1*/

// const base = prompt("Enter base");
// const height = prompt("Enter height");

// let area = 0.5 * parseInt(base) * parseInt(height);
// console.log(area);

// const sidea = prompt("Side a: ");
// const sideb = prompt("Side b: ");
// const sidec = prompt("Side c: ");

// let triangle = parseInt(sidea) + parseInt(sideb) + parseInt(sidec);
// console.log(`The perimeter of the triangle is ${triangle}`);

//9

let hours = prompt("Enter hours: ");
let rate = prompt("Enter rate per hour: ");
let earning = parseInt(hours) * parseInt(rate);

let weeklyPay = alert(`Your weekly earning is ${earning}.`)


