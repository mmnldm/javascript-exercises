
//* 

function isEmpty(obj){
   for(let key in obj){
    
    return false;
   }
    return true;
    
}
console.log(isEmpty());


// * Exercise 2 

    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
      }
      
      let sum = 0;
      for(let key in salaries){
        sum += salaries[key];
      }

      console.log(sum);

// * Exercise 3 

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiplyNumeric(menu) {
    for (let key in menu) {
      if (typeof menu[key] == 'number') {
        menu[key] *= 2;
      }
    }
  }

multiplyNumeric(menu);
console.log(menu);

// * Exercise 3

let studentInfo = {
    firstname: "Emery",
    lastname: "Edem",
    age: 22,
    firstgrade: 10,
    secondgrade: 20,
    thirdgrade: 2000,
}

function getStudentInfo(studentInfo){

    let fullname = `${studentInfo.firstname} ${studentInfo.lastname}`;
    let age = `${studentInfo.age}`;
    let grades = `[${studentInfo.firstgrade},${studentInfo.secondgrade}, ${studentInfo.thirdgrade}]`;

    return{
        fullname,
        age,
        grades,
    }
}

let getter = getStudentInfo(studentInfo);
console.log(getter);

// * Exercise 

let person = {
    name: "John",
    age: 20,
    gender: "male"
  };

  function countProperties(person){
    let count = 0;

    for(let prop in person){
       if(person.hasOwnProperty(prop)){
        count++
       }
    }
    return count;
  }

  let finalcount = countProperties(person)
  console.log(finalcount);

  // * Exercise 

  let obj1 ={
    name: "Amala",
    gender: "female",
  }

  let obj2 ={
    age: 31,
    skin: "Dark",
  }

  function mergeObjects(obj1,obj2){
    let results = {};

    for(let prop in obj1){
        results[prop] = obj1[prop];
    };
    for(let prop in obj2){
        results[prop] = obj2[prop];
    };

   return results;
  }

  let merger = mergeObjects(obj1,obj2);
  console.log(merger);

  // * Final task for tonight 

  let num_obj = {
    a: 5,
    b: 10,
    c: "hello",
    d: true,
    e: 2.5
  };

  let sumValues = (num_obj) =>{
    let sum = 0;

    for(let props in num_obj){
        if(typeof num_obj[props] == 'number'){
            sum += num_obj[props];
        }
    }
    return sum;
  }

  let again = sumValues(num_obj);
  console.log(again);

  // * Function 

  let book = {
    title: "The Courage to Be Disliked",
    author: "Ichiro Kishimi",
    pages: 288,
    read: true,
  }


  function info(book){
        if (book.read == true){
            return `${book.title} by ${book.author}, ${book.pages} already read`;
        } else{
            return `${book.title} by ${book.author}, ${book.pages} not read yet`;
        }
  }

  let finalread = info(book);
  console.log(finalread);

  // * Objects with arrays and a function 
  
  let profile = {
    name: "Amada",
    age: "20",
    gender: "Female",
    hobbies: ["Listening to music", "Juggling", "Smoking"],
  }

  let userinput = prompt("What is your name?");

  let greet = (profile, userinput) => {
    return `Hello ${userinput}, My name is ${profile.name}`;
  }
  console.log(greet(profile,userinput));

  //* I will try this too 

  let profile_2 = {
    name: "Emery",
    age: 22,
    hobbies: ['Coding', 'Fashion'],
  }

  let greeting = (profile_2,) => {
    let sayHello = `Hello, my name is ${profile_2.name}`;
    return sayHello;
  }

  let birthday = (profile_2) =>{
    profile_2.age++;

    let hbd = `Happy birthday, ${profile_2.name}! You are now ${profile_2.age} years old.`
    return hbd;
  }

  console.log(birthday(profile_2));
  console.log(birthday(profile_2));
  console.log(greeting(profile_2));

  profile_2.hobbies.push("Reading");
  console.log(profile_2.hobbies);
