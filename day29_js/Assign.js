const maths=94;
const physics=87;
const chemistry=78;
const english=88;
const Hindi=87;

const level1=true;
const level2=true;
const level3=true;

const result=(maths+physics+chemistry+english+Hindi)/5;
if(result>=80){
    console.log("you are eligible for olympic");
    if(level1&&level2&&level3)
    {
        console.log("you are clear all level");
    }
    else{
        console.log("not clear");
    }
}
else{
    console.log("not eligible");
}