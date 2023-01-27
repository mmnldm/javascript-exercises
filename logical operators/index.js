let hour = 9;

if(hour < 10 || hour > 18){
    console.log("The office is closed");
}

// example of OR operator
let firstname = '';
let middlename = '';
let lastname = '';

console.log(firstname||middlename||lastname||'Namer');

//short circuiting in logical operator 
function gfg() {
    console.log(false && true);
    console.log(true && true);

    console.log(true || true);
    console.log(false || true);
}

gfg();

//example AND operator && 
let minutes = 30;
let seconds = 45;

if(minutes == 40 && seconds == 45){
    console.log("What?");
}
else{
    console.log("gotya");
}

console.log(null || 2 || undefined);

alert(alert(1) || 2 || alert(3));

// 
let age = prompt("What is your age:", '');
age = Number(age);

if (age >= 14 && age <= 90){
    console.log(age);
}

