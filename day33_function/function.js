//function=>block of code to perform or execute a particular task
// let a=20,b=10;
// console.log(`sum of ${a} and ${b}=${a+b}`);


function add(a,b){
    console.log(`sum of ${a} and ${b}=${a+b}`);
    alert(`sum of ${a} and ${b}=${a+b}`);
}
function subtract(a,b){
    console.log(`subtraction of ${a} and ${b}=${a-b}`);
    alert(`subtraction of ${a} and ${b}=${a-b}`);
}
function multiply(a,b){
    console.log(`multiply of ${a} and ${b}=${a*b}`);
    alert(`multiply of ${a} and ${b}=${a*b}`);
}
function divide(a,b){
    console.log(`divide of ${a} and ${b}=${a/b}`);
    alert(`divide of ${a} and ${b}=${a/b}`);
}

let userChoice=parseInt(prompt("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division"));
let userInput1=parseInt(prompt("enter first no"));
let userInput2=parseInt(prompt("enter second no"));
switch (userChoice) {
    case 1:
        add(userInput1,userInput2)
        break;
    case 2:
        subtract(userInput1,userInput2)
        break;

    case 3:
        multiply(userInput1,userInput2)
        break; 
            
    case 4:
        divide(userInput1,userInput2)
        break;

    default: console.log("invalid");
        break;
}