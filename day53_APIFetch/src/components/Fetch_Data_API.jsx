import React, { useEffect, useState } from 'react'

const fetch_Data_API = () => {
const [apiData, setApiData] = useState([])

    useEffect(() => {
      const fetchDataFromAPI=async()=>{
        const api=await fetch('https://jsonplaceholder.typicode.com/todos')
        const data=await api.json();
        setApiData(data)
        console.log("my data=",data)
      }
      fetchDataFromAPI();
    }, [])
    
  return (
    <div>{apiData.map((data)=><div key={data.id}>
        <h3>{data.title}</h3>
        <h3>{data.id}</h3>
    </div>)}</div>
  )
}

export default fetch_Data_API