const fetchData=async(cat)=>{
    const api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cat}`);
    const data=await api.json()
    console.log(data.meals);
    const showData=document.querySelector('.show')
    showData.innerHTML=data.meals.map((item)=>`<div>
    <h2>${item.strMeal}</h2>
    <img src=${item.strMealThumb} alt="" style="width:280px;"/>
    </div>`).join(" ");
};
fetchData("indian")

document.querySelector('#btn1').addEventListener('click',()=>{
    fetchData("indian")
})

document.querySelector('#btn2').addEventListener('click',()=>{
    fetchData("canadian")
})

document.querySelector('#btn3').addEventListener('click',()=>{
    fetchData("british")
})

document.querySelector('#btn4').addEventListener('click',()=>{
    fetchData("american")
})