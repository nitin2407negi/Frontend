const  arr=[
    { id:1,name:'superman',email:'superman@gmail.com',salary:12000 },
    { id:2,name:'spiderman',email:'spiderman@gmail.com',salary:11000 },
    { id:3,name:'ironman',email:'ironman@gmail.com',salary:14000 },
    { id:4,name:'hulk',email:'hulk@gmail.com',salary:1200 }   
]
//map,filter
// map=return arr
//callback=ek function ke baad dusra function chle use callback bolte hai

const result=arr.map((data)=>data.salary+1)
console.log("this is coming from map",result);