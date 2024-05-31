class Counter{
    constructor(){
        let count=0;
        this.increment=()=>{
            count++;
            console.log(count);
        };
        this.decrement=()=>{
            count--;
            console.log(count);
        };
    }
}
const counrer1=new Counter();
counrer1.increment();
counrer1.increment();
counrer1.decrement();