const pound = 103.80;
const dollar = 83.47;
const yen = 0.54;
const euro = 88.89;
const dinar = 272.79;

let userValue = parseFloat(prompt("Enter value: "));
let convert = parseInt(prompt("Km to Meter Enter 1\nkilogram to gram enter 2\n degree to farenheit enter 3\ndollar to dinar Enter 4\nyen to INR Enter 5\npound to euro enter 6"));

let result;

switch (convert) {
    case 1: {
        console.log("...Km to Meter");
        result = userValue * 1000; 
        console.log(`${userValue} km = ${result} meter`);
        break;
    }
    case 2: {
        console.log("...Kilogram to Gram");
        result = userValue * 1000;
        console.log(`${userValue} kg = ${result} gram`);
        break;
    }
    case 3: {
        console.log("...Degree to Fahrenheit");
        result = (userValue * 9 / 5) + 32; 
        console.log(`${userValue} degree = ${result} Fahrenheit`);
        break;
    }
    case 4: {
        console.log("...Dollar to Dinar");
        result = userValue * dinar; 
        console.log(`${userValue} dollar = ${result} dinar`);
        break;
    }
    case 5: {
        console.log("...Yen to INR");
        result = userValue * yen; 
        console.log(`${userValue} yen = ${result} INR`);
        break;
    }
    case 6: {
        console.log("...Pound to Euro");
        result = userValue * euro; 
        console.log(`${userValue} pound = ${result} euro`);
        break;
    }
    default: {
        console.log("Invalid conversion choice.");
    }
}
