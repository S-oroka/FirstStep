import React from 'react'
import '../styles/Home.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='intro-banner'>
        <h1 className='welcome'>This is your FirstStep.</h1>
        <h2 className='description'>A fitness app determined to support and enhance your fitness journey.</h2>
      </div>
      <div className='item-blocks'>
        <div className='quote-banner'>
          “If you want something you’ve never had, you must be willing to do something you’ve never done.”
          -Thomas Jefferson
        </div>
        <div className='view-plans'>
          <NavLink to="/workoutplans" className='plans-link'>
            <h1>
              View Your Workout Plans
            </h1>
            <h3>

            </h3>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home
