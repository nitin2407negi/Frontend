const h1=document.createElement('h1')
h1.innerText='this is dynamic h1'
document.body.appendChild(h1)

document.querySelector('div').appendChild(h1)
const div=document.querySelector('div')
document.body.insertBefore(h1,div)
// document.body.appendChild(h1)

document.body.replaceChild(h1,div);