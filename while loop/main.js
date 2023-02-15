// let i = 0;
// while( i < 10) {
//     console.log(i);
//     i += 2;
// }

let n = 0;
let x = 0;

while(n < 3){
    n++;
    x += n;
    console.log(x);
}

let sum = 0;
let i = 2;
while (i <= 100) {
  if (i % 2 === 0) {
    sum += i;
  }
  i++;
}
console.log(sum);


// let password; 

// do{
//     password = prompt('Input password:');
// }
// while(password !== 'password');

// if (password === password){
//     alert('Welcome');
// } else {
//     alert("try again");
// }

/*
while loop exercise
*/

let rando = 3;

while(rando){   
    alert(rando--);
}
// * while loop with an expression
let newtester = 3;

while(newtester > 0){   
    alert(newtester--);
}

for (let evenNumero = 0; evenNumero <= 10; evenNumero++){
    //this check if the variable is an even number and outputs the result
    if (evenNumero % 2 == 0){
        console.log(evenNumero)
    }
}

let numero = 0;

while(numero < 3){
    console.log(`number ${numero}!`)
    numero++;
}

do {
    greater = prompt("Enter a number greater than 100:", '');
} 
while(greater <= 100 && greater);

if (greater > 100){
    console.log("LFG");
}

