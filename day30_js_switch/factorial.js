let no=prompt("enter a range of number for factorial");
let fact=1;
for (let i = 1; i <=no; i++) {
    fact=fact*i;   
}
console.log(`factorial of ${no} is ${fact}`);
