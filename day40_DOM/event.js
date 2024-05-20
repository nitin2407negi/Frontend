const body=document.querySelector('body')
const changeDark=()=>{
  body.style.backgroundColor='black'
  body.style.color='white'
};

const changeLight=()=>{
    body.style.backgroundColor='white';
    body.style.color='black';
};

// changeDark();
// changeLight();
const Img=document.querySelector('img')
const changeImg=()=>{
       Img.src='https://images.pexels.com/photos/20400385/pexels-photo-20400385/free-photo-of-a-coffee-machine-is-being-used-to-make-coffee.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
}
const originalImage=()=>{
    const img=document.querySelector('img')
    img.src="https://images.pexels.com/photos/590478/pexels-photo-590478.jpeg?auto=compress&cs=tinysrgb&w=600"
}


