let userINR=parseInt(prompt("enter INR"));
const pound=103.80;
const dollar=83.47
const yen=0.54
const euro=88.89
const dinar=272.79;
let result;

let convert=parseInt(prompt("INR to Pound enter 1\n INR to dollar 2\n INR to yen enter 3\n  euro to inr enter 4\n dinar to inr enter 5"));
switch(convert){
    case 1:{
        console.log("....INR to pound....");
        result=userINR/pound;
        console.log(`${userINR} in pound =${result} pound`);
    }
    break;
    case 2:{
        console.log("....INR to dollar....");
        result=userINR/dollar;
        console.log(`${userINR} in us dollar =${result} dollar`);
    }
    break;
    case 3:{
        console.log("....INR to yen....");
        result=userINR/yen;
        console.log(`${userINR} in japanese yen=${result} yen`);
    }
    break;
    case 4:{
        console.log("....euro to INr....");
        result=userINR*euro;
        console.log(`${userINR} in euro=${result} rupees`);
    }
    break;
    case 5:{
        console.log("....Dinar to INR....");
        result=userINR*dinar;
        console.log(`${userINr} in dinar=${result} rupees`);
    }
    break;

    default:console.log("invalid");


}
