const log = console.log;
// * Functions as First-Class Citizens
function resolveConflict (name){
    log(`Let there be peace ${name}`);
}

const peacer = resolveConflict;
peacer('Emery');

// * Callback function

function add(a,b){
    return a + b;
}
let sum = add;
function average (a,b,fn){
    return fn(a,b)/2;
}
let result = average(10,20,sum);
log(result);

// * Function Expression 
let sayHi = function(){
    alert("Welcome");
}

sayHi();

// * Main function asking question
let ask = function(question,yes,no){
    if(confirm(question)) yes()
    else no();
};

let showOk = function(){
    alert("You agreed");
}

let showCancel = function(){
    alert("Denied")
}

ask("Do you agree?", showOk, showCancel);

// * 2
function orderPizza(callback){
    setTimeout(()=> {
        const pizza = "🍕"
        callback(pizza)
    }, 2000

    )
}

function pizzaReady (pizza){
    log(`Eat the ${pizza}`)
}
orderPizza(pizzaReady);


// * My example
function orderDrink(soda){
    setTimeout(() => {
        const wine = "🍸";
        soda(wine);
    }, 3000);
}

function drinkReady(soda){
    log(`Your ${soda} is ready!`)
}

orderDrink(drinkReady);

// * Example 3 

let orderGlasses = function(off_white){
    setTimeout(() => {
        const glasses = "🕶";
        off_white(glasses);
    }, 1000);
};

let orderRecieved = function(off_white){
    log(`Your ${off_white} are so cool!`)
}

orderGlasses(orderRecieved);

// * I need to create a README for my learning codes

