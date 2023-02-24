const log = console.log;

// * Fruit list
let fruits = ['almond', 'banana', 'strawberry'];

log(fruits[0]);

// * Add another fruit to the list 

fruits[3] = 'Plum';
log(fruits);

// * access last element in the array
log(fruits.at(-1));
// * Length of elements in an array
log(fruits.length);
// * Methods at the end of an array
log(fruits.pop());
fruits.push("Guava");
log(fruits);

//* Methods at the beginning of an array
log(fruits.shift());
log(fruits);

fruits.unshift("Grape");
log(fruits);

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

