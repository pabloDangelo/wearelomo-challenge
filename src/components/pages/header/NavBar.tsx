import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export const NavBar = () => {
  return (
    <nav className='NavBar'>
        <Link className='Link' to="/">To Do List</Link>
        <Link className='Link' to="/abmusuarios">ABM Usuarios</Link>
    </nav>
  )
}

export default NavBar;




