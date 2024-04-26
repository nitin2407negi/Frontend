//function without arguments with return type
function sum(a, b) {
    console.log(`sum of ${a} and ${b} = ${a + b}`);
    return a + b;
}

//function with arguments & with no return type
function summ(a,b) {
    console.log(`sum of ${a} and ${b}=${a+b}`);
}
//function without arguments & with return type
function div(){
    let a=30
    let b=10
    console.log(`division of ${a} and ${b}=${a/b}`);
}
//function without arguments & with no return type
function test(){
    let a=300;
    let b=10;
    console.log(`division of ${a} and ${b}=${a/b}`);
}

const result = sum(10, 20);
console.log(result); 