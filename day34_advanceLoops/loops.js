// for=>jb number of iteration known history
// while=>number of iteration unknown
// do while=>atleast run once

//foreach==>index,element,array
let arrr=[10,20,"superman","spiderman"]
arrr.forEach((value,index) =>  console.log(index,value));

//for-in ==object ke liye

const Marvel={
    movieName:'Infinity war',
    release:2018,
    hero:'salman khan',
    location:'Uttrakhand',
    stars:'5 stars'
}
for(let key in Marvel){
//    console.log(`${key}: ${Marvel[key]}`);
//    console.log(`${key}`);
}

//for-of==array ko iterate krne ke liye

let arr=[10,20,"superman","spiderman"]
for(let element of arr){
    // console.log(element);
}