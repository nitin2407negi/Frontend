// function print(){
//     console.log("this is normal function");
// }
// print();

//arrow function
// const print=()=> console.log("this is arrow function");
// print()

// const sum=(a,b)=> a+b
// console.log(sum(10,20));

// const mul=(a,b)=>a*b
// console.log(mul(10,20));

// const sub=(a,b)=>a-b
// console.log(mul(30,20));

// const div=(a,b)=>a/b
// console.log(mul(30,15));

// const sum=(a,b)=> {
//     console.log(`sum of ${a} and ${b}=${a+b}`);
//     return a+b;
// }
// sum(10,20);

//global scope
//local scope
// const test=()=>{
//     let a=10;
//     let b=20;
//     console.log(a,b);
// }
// test();

let a=10,b=20
console.log(a,b);
const test=(a,b)=>{
    a=30;
    b=40;
}
test(a,b)
console.log(a,b);

// task =>write