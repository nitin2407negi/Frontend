const aadhar=true;
const pancard=true;
const age=10;
//nested if_else...................................
if(pancard&&aadhar)
{
  console.log("you can open account in our bank");
  if(age>=18)
  {
    console.log("you are eligible for car insurance");
  }
  else{
    console.log("not eligible for insurance");
  }
}
else{
    console.log("you can not open account in our bank");
}
