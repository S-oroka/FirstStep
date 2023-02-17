import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Workout.css'

const Workout = ({ name, description }) => {
  return (
    <div className='text'>
      <h1>{name}</h1>
      <h2>{description}</h2>
      
    </div>
  )
}

export default Workout
