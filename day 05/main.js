const arr = Array();
let arrN = ["A", "B", "C", "D", "E", "F"];
let lastIndex = arrN.length -1
let mixedDataTypes = ["Bool", 2, "Money", "Function", true, 1.6, "Emery"];
let itCompanies = ['Facebook','Amazon', 'Google', 'Apple', 'IBM']

let index = itCompanies.indexOf('Google');
if (index === 2){
    console.log("The companies exists")
}
else
{
    console.log("This company doesn't exist")
}


console.log(arr);
console.log(arrN);
console.log(arrN.length);
console.log(arrN[0]);
console.log(arrN[3]);
console.log(arrN[lastIndex])
console.log(mixedDataTypes.length);
console.log("Number of companies:", itCompanies.length)
console.log("First company:", itCompanies[0]);
console.log("Third company:", itCompanies[2]);
console.log("Last company:", itCompanies[4]);
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(`${itCompanies} are big IT COmpanies`);
itCompanies.sort();
itCompanies.reverse();
console.log(itCompanies);

//string to number conversion

let sum = '123';
let calc = Number(sum) + 3;

console.log(calc);

//number to string conversion 
let num = 123;
let str = String(num);

console.log(typeof str);

//remainder operator


