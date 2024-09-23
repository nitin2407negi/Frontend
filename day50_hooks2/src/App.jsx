import React, { useEffect,useState } from 'react'


const App = () => {
const [counter, setCounter] = useState(0)
const [name, setName] = useState("")
const [jsonData, setjsonData] = useState([])

  useEffect(() => {
    const fetchData=async()=>{
      const api=await fetch(`https://jsonplaceholder.typicode.com/${name}`)
      const data=await api.json();
      setjsonData(data);
    }
    fetchData();
  }, [name])
  
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={()=>setName('posts')}>post</button>

      <button onClick={()=>setName('albums')}>album</button>

      <button onClick={()=>setName('todos')}>todos</button>

      {
        jsonData.map((data)=>{
          return (
            <>
            <h1>{data.id}{" "}{data.title}</h1>
            </>
          )
        })
      }
      
    </div>
  )
}

export default App