let no=496440
let result=0
while(no!=0)
{
  let lastdigit=no%10
  result=result+lastdigit;
  no=Math.floor(no/10);
}
console.log("sum of number",result);
