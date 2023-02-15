import React from 'react'
import '../styles/WorkoutPlanCard.css'
import { Link } from 'react-router-dom'

const WorkoutPlanCard = ({name, time, planLink}) => {
  return (
    <Link to={`/workoutplans/details/${planLink}`}>
    <div className='card'>
      <h1>{name}</h1>
      <h3>{time}</h3>
    </div>
    </Link>
  )
}

export default WorkoutPlanCard