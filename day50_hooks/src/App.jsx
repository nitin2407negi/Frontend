import React from 'react'
import { useState } from 'react';

const App = () => {
 

  const [counter,setCounter]=useState(0)


  const increase=()=>{
    setCounter(counter+1);
    console.log("counter="+counter); 
  }
  const decrease=()=>{
    setCounter(counter-1);
    console.log("counter"+counter);
    
  }
  return (
    <>
    <div className="app">
      <h1>{counter}</h1>
      <div>
      <button onClick={increase}>Increase by 1</button> {" "}
      <button onClick={decrease}>Decrease by 1</button>
      </div>                    
    </div>
    
    </>
  )
}

export default App;