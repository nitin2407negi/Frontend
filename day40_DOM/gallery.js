const image=[
    "https://images.pexels.com/photos/22873741/pexels-photo-22873741/free-photo-of-close-up-of-a-cup-of-coffee.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    "https://images.pexels.com/photos/22941109/pexels-photo-22941109/free-photo-of-woman-near-favartix-lighthouse-in-spain.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    
    "https://images.pexels.com/photos/11051300/pexels-photo-11051300.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"

];
const img=document.querySelector('img')

let index=0;
img.src=image[index];

const increaseIndex=()=>{
    index++;
    if(index<image.length-1){
       img.src=Image[index];
    }
    else if(index==image.length){
        index=0;
        img.src=image[index];
    }
};

const decreaseIndex=()=>{
    index--;
    if(index>0){
    
    img.src=Image[index];
    }
    else if(index<0){
        index=image.length-1;
        img.src=image[index];
    }
};

    
