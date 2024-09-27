import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false)

  const navigate=useNavigate()

  const login=()=>{
    setisLoggedIn(true)
    navigate('/dashboard')
  }

  const logout=()=>{
    setisLoggedIn(false)
  }

  
  return (
    <div className='navbar'>
        <div className="left item">WDM</div>
        <div className="right">
          {isLoggedIn && (<>
         
            <Link className='item' to={'/'}>Home</Link>
            <Link className='item' to={'/dashboard'}>Dashboard</Link>
            <Link className='item' to={'/profile'}>Profile</Link>

            <Link className='item' to={'/course_Detail'}>Course_detail</Link>

            <Link className='item' style={{fontWeight:'bold', backgroundColor:'gray'}}
            onClick={logout}>Logout</Link>

            </>)}

            {!isLoggedIn&&(<>
           
            <Link className='item' to={'/team'}>Team</Link>
            <Link className='item' to={'/course'}>Product</Link>
              
               
            <Link className='item' style={{fontWeight:'bold', backgroundColor:'gray'}} onClick={login}>LogIn</Link>
            

            </>)}
        </div>
    </div>
  )
}

export default Navbar