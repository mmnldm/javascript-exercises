const log = console.log; 
// * Function declaration and return statements
function areaRect(width, height){
    if(width > 0 && height > 0){
        return width * height
    }
    return 0;
}
let result = areaRect(20,120);
log(result)

function square(x){
   let res = x * x;
   log(res)
   return res;
}
square(3);

let age = prompt("How old are you?", 18);

function checkAge(age){
    if(age >= 18){
        return true;
    } else{
        confirm("Do you have permission to be here?");
    }
}


// * Reusing the function in another function 

function showMovie(){
    if(!checkAge(age)){
        log("You aren't allowed, sowie")
        return;
    } else{
        return alert("What would you like to watch?")
    }
}
showMovie();

// * Functions with different tasks that are connected
function showPrime(n){
    for(let i = 2; i < n; i++){
        if(!isPrime(i)) continue;

        alert(i);
    }
}
function isPrime(n){
    for(let i = 2; i < n; i++){
        if(n%2 ==0) return false;
    }
    return true;

}
showPrime(10);

function checked(newage){
    let checker = (newage > 18) ? true : confirm("Did your parents allow");
    return checker;
}

function t_checker(ager){
    let newc = (ager > 18) || confirm("Did your parents allow?");
}
