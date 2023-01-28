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

if (!(age >= 14 && age <= 90)){
    console.log(age);
}

// 
let Username = prompt("Login", "");

if (Username === "Admin") {
  let pass = prompt("Password");

  if (pass === "TheMaster") {
    alert("Welcome");
  } else if (pass === "" || pass == null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (Username === "" || Username === null) {
  alert("Cancelled");
} else {
  alert("I don't know you");
}

// 

let quest = prompt("Do you have money in wallet?", '');

if (quest === "Yes" || quest === 'yes'){
    let shop = prompt("Is brand of pen available?", '')

    if(shop === 'yes' || shop === "Yes"){
        alert("Take the pen")
    }
} else if (quest === "No" || quest === "no"){
    alert("Put money in wallet");
} else{
    alert("What you doing?")
}