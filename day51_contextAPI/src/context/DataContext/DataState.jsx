import React from 'react'
import DataContext from './DataContext'
const DataState = (props) => {
        const obj={
          name:"nitin",
          id:"10"
        }
        const [counter, setcounter] = useState(0)
  return (
    <DataContext.Provider value={{
         obj,
         counter,
         setcounter
    }}>
{props.children}
    </DataContext.Provider>
  )
}

export default DataState