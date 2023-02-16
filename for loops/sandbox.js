let log = console.log;

for (let i = 1; i < 5; i++){
    log(i);
}

// * continue 

for (i = 0; i < 10; i++){

    if(i % 2 == 0) continue;
    
    alert(i);
}