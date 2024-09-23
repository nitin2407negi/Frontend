class Bank{
    rateOfInterest(){

    }
}
class PNB extends Bank{
    rateOfInterest(){
        return 0.04;
    }
}

class HDFC extends Bank{
    rateOfInterest(){
        return 0.08;
    }
}
const obj=new PNB();
console.log(obj.rateOfInterest());