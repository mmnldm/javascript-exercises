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
