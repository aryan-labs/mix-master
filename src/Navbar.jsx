import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

const Navbar = () => {
  const [active,setActive]=useState('Home')
  return (
    <div className='Navbar'> 
      <h1 className='title'>MixMaster</h1>
      <div className='Navbar-comp'>
      <NavLink onClick={()=>{setActive('Home')}} className={active==='Home'?'active':''}  to='/'><h1>Home</h1></NavLink>
      <NavLink onClick={()=>{setActive('About')}} className={active==='About'?'active':''} to='/about'><h1>About</h1></NavLink>
      <NavLink onClick={()=>{setActive('NewsLetter')}} className={active==='NewsLetter'?'active':''}  to='/newsletter'><h1>NewsLetter</h1></NavLink>
      </div>
    </div>
  )
}

export default Navbar
