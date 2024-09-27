import React from 'react'
import { useNavigate } from 'react-router-dom'

const Team = () => {
  const navigate=useNavigate()
  const goToHome=()=>{
    navigate('/');
  }
  const goBack=()=>{
    navigate(-1);
  }
  return (
    <div>
      <button onClick={goToHome}>go to home</button>
      <button onClick={goBack}>go back</button>
    </div>
  )
}

export default Team