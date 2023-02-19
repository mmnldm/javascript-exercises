let log = console.log;

for (let i = 1; i < 5; i++){
    log(i);
}

// * continue 

for (i = 0; i < 10; i++){

    if(i % 2 == 0) continue;
    
    console.log(i);
}

let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );