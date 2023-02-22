const log = console.log;

//* Arrow functions eg

let sayHello = (a,b) => a + b;
log(sayHello(2,3));

let numero = () => log('New man');
numero();

let displayMsg = (text) => {
    setTimeout(() => {
        const msg = "What's good?";
        text(msg)
    }, 1000);
}

let display2 = (text) => {
    log(`I said ${text}`);
}

displayMsg(display2);

let que = (question, agreed, not) =>{
    if(confirm(question)) agreed()
    else{
        not()
    }
}

let okay = () => alert("LFG");
let notokay = () => alert("Nada");

que("Wyd", okay, notokay);

let trying = (t) => t * t;

let u = 20; 
let ures = trying(u);
console.log(ures);

let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
  }

  
  ask(
    "Do you agree?",
    () =>  alert("You agreed.") ,
    () =>  alert("You canceled the execution.")
  );