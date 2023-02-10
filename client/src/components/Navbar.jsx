import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/Navbar.css"

const Navbar = () => {
    return (
        <div className='navBar'>
            <div className='logo'>
                <h1>FirstStep</h1>
            </div>
                <div className='links'>
                    <NavLink to="/" className='link'>Home</NavLink>
                    <NavLink to="/workoutplans" className='link'>Workout Plans</NavLink>
                </div>
            
        </div>
    )
}

export default Navbar
