import React from 'react'
import Fetch_Data_API from './components/Fetch_Data_API';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Course_Detail from './Pages/Course_Detail';
import Team from './Pages/Team';
import Product from './Pages/Product';
import Navbar  from './components/Navbar';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';

const App = () => {
  return (
    <>
    {/* <Fetch_Data_API/> */}
    <Router>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/course' element={<Product/>}/>
         <Route path='/course_Detail' element={<Course_Detail/>}/>
         <Route path='/team' element={<Team/>}/>
         <Route path='/course/:id' element={<Course_Detail/>}/>
         <Route path='/profile' element={<Profile/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App