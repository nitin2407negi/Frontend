
const img=document.querySelector('img')
const h1=document.querySelectorAll('h1')
setInterval(() => {
    img.src='https://images.pexels.com/photos/22873741/pexels-photo-22873741/free-photo-of-close-up-of-a-cup-of-coffee.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    h1.innerText='road'
}, 1000);

setInterval(() => {
    img.src='https://images.pexels.com/photos/22941109/pexels-photo-22941109/free-photo-of-woman-near-favartix-lighthouse-in-spain.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    h1.innerText='road 2'
}, 2000);

setInterval(() => {
    img.src='https://images.pexels.com/photos/21915598/pexels-photo-21915598/free-photo-of-mosque-cathedral-of-cordoba-in-spain.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    h1.innerText='road-3'
},3000);

setInterval(() => {
    h1.innerText="negi"
    img.src='https://images.pexels.com/photos/11051300/pexels-photo-11051300.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    
}, 4000);

setInterval(() => {
    h1.innerText='road-4'
    img.src='https://images.pexels.com/photos/20684818/pexels-photo-20684818/free-photo-of-dark-arch-and-budapest-cityscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    
}, 5000);