import React from 'react'
import c1 from './components/c1'
import DataState from './context/DataContext/DataState'
const app=()=>{
  return (
    <>
   <DataState>
    <div>
      <h1>app</h1>
      <c1 />
    </div>
    </DataState>
    </>
  )
}

export default App