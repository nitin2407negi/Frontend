class Animal{
    constructor(name){
        this.name=name;
    }
    speak=()=>{
        console.log(`${this.name} makes asound`);
    }
}
class Dog extends Animal{
    speak=()=>{
        console.log(`${this.name} barks`);
    }
}
const dog=new Dog("husky")
dog.speak();
