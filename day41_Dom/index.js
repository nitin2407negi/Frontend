// console.log("hello");

// const h1=document.createElement('h1');
// h1.setAttribute('class','black')
// h1.innerText='this is my own h1'
// document.body.appendChild(h1)


// console.log("making my own tag",h1);

// const imgtag=document.createElement('img');
// imgtag.setAttribute('class','tag')
// imgtag.src='https://images.pexels.com/photos/10295057/pexels-photo-10295057.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
// document.body.appendChild(imgtag)


let input;
const getinput = () => {
    input = document.querySelector('#ip1').value
    const myElement = (msg,cls) => {
        const p = document.createElement("p");
        p.setAttribute("class", cls)
        p.innerText = msg;
        document.body.appendChild(p);
    };
    let i;
    for (i = 0; i < input.length; i++) {
        let ch = input.charAt(i)
        if (ch == '!' || ch == '@' || ch == '$') {
            console.log("included");
            myElement("your password is strong","green");
            break;
        }
    }
    if (i == input.length) {
        console.log("not included");
        myElement("your password is weak","red")
    }
    // console.log(input)
}
