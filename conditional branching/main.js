let question = prompt("In which year was ECMAScript-2015 specification published?", '');

if (question == 2015)
{
    alert("You are right");
    alert("You are smart");
}
else if(question < 2015)
{
    alert("Too early")
}
else
{
    alert("How can you be so wrong?");
}

// 
let newQues = prompt('What is the "Official" name of Javascript?', '');

if(newQues == 'ECMAScript')
{
    alert("Way to go");
}
else
{
    alert("You should know this");
}

// 
let inp = prompt("Input a number?", 0);

if (inp > 0){
    alert(1)
}
else if(inp < 0){
    alert(-1)
}
else{
    alert(0)
}