const products=[
    { title:'i phone',price:90000,color:'black'},
    { title:'hp',price:40000,color:'white'},
    { title:'car',price:'7 lakh',color:'black'}
]

for(let i=0;i<products.length;i++)
{
    // console.log(products[i]);
}

// products.forEach((value,index)=>console.log(value,index))

for(let key in products)
{
    // console.log(products[key])
}

for(let element of products)
{
    console.log(element.title); 
}