console.log("hello console");
const element=document.querySelector('h1')
console.log("classname=",element.className);
console.log("id=",element.id);

element.className='red'

// setTimeout(() => {
//     element.className='yellow'
//     console.log('inside timeout');
// }, 1000);
// setTimeout(() => {
//     element.className='red'
//     console.log('inside timeout');
// }, 3000);

// setInterval(() => {
//     element.className='red'
// }, 1000);

// setInterval(() => {
//     element.className='yellow'
// }, 2000);


element.style.backgroundColor='blue'
element.style.color='black'

const body=document.querySelector('body');
body.style.backgroundColor= 'blue'

setInterval(() => {
    body.style.backgroundColor= 'blue'
}, 1000);

setInterval(() => {
    body.style.backgroundColor= 'grey'
}, 2000);

setInterval(() => {
    body.style.backgroundColor= 'yellow'
}, 3000);

setInterval(() => {
    body.style.backgroundColor= 'green'
}, 4000);

setInterval(() => {
    body.style.backgroundColor= 'red'
}, 5 000);
