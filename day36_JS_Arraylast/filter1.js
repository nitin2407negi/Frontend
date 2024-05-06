const data=[
    {
        id:1,
        category:'xl',
        brand:'being human',
        price:999
    },

    {
        id:2,
        category:'L',
        brand:'Nike',
        price:1500
    },

    {
        id:3,
        category:'S',
        brand:'zara',
        price:700
    },

    {
        id:4,
        category:'L',
        brand:'being human',
        price:9999
    },
]
const result1=data.filter((item)=>item.price<1000)
console.log("filter by price=",result1);

const result2=data.filter((item)=>item.category=='L')
console.log("filter by category=",result2);

const result3=data.filter((item)=>item.brand=='being human')
console.log("filter by brand=",result3);