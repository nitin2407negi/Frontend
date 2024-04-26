let radius = parseFloat(prompt("Enter radius"));
let height = parseFloat(prompt("Enter height"));

const calculateArea = (radius, height) => 2 * Math.PI * radius * (radius + height);

const area = calculateArea(radius, height);
alert(`The area is: ${area}`);



