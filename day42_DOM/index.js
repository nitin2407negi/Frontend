const element =document.querySelector('.parent')
// console.log(element.firstElementChild);
// console.log(element.lastElementChild.innerText);

console.log(element.children.length);

for(let i=0;i<element.children.length;i++){
    element.children[i].style.backgroundColor='grey'
    element.children[i].style.margin='10px'
    element.children[i].style.padding='10px'
}

console.log(element.previousElementSibling)

