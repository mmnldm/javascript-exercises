
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
