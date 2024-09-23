import React, { useContext } from 'react'
import dataContext from '../context/DataContext/DataContext'

export const c4 = () => {
  const d=useContext(dataContext)
  console.log(d);
  
  return (
    <div>
        <h1>c4{" "}{ d.obj.name}{d.obj.id}</h1>
        <h1>{d.counter}</h1>
        <button onClick={()=>d.setcounter(d.counter+1)}>increase counter</button>
    </div>
  )
}
