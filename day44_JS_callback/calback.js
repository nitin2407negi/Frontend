// callback=>ek function ke parameter me dusra function call krna use callback khte hai


//function=1
// const print=(content,callback)=>{
//     console.log(content)
//     callback();
// }
// const print2=()=>console.log("spiderman is belong from Marvel");
// print("super is belong from DC",print2)

//function=2

const marksClc=(callback)=>{
   const result=callback();
   console.log("this is result array",result);
   let totalMarks=0;
   let count=0;
   for(let key in result){
    totalMarks+=result[key]
    count++;
   }
   return totalMarks/count;
};

const subjects=()=>{
    const arr={
        cpp:59,
        java:83,
        python:79,
        js:97,
        node:69
    }
    return arr;
}
console.log(marksClc(subjects))