class Car{
    constructor(make,model,prize){
        this.make=make;
        this.model=model;
        this.prize=prize;
    }
    displayInfo=()=>{
        console.log(`car:${this.make} ${this.model} ${this.prize}`);
    }
}
const myCar=new Car("toyoyo",2012,500000);
myCar.displayInfo();