//surface area of cylinder
//A=2*PI*r*r+2*PI*R*H

const sArea=(r,h)=>(2*Math.PI*r*r) + (2*Math.PI*r*h);
const r=parseFloat(prompt("enter radius"));
const h=parseFloat(prompt("enter height"));
const result=sArea(r,h);
alert(`surface area of cylinder is ${result}`);

