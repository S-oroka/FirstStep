import React from 'react'
import '../styles/WorkoutPlanCard.css'
import { Link } from 'react-router-dom'

const WorkoutPlanCard = ({name, time, description, workouts, planLink}) => {
  return (
    <Link to={`plans/details/${planLink}`}>
    <div className='card'>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <h3>{time}</h3>
      {workouts.map(workout => (
        <h3 key={workout._id}>{workout.name}</h3>
      ))}
    </div>
    </Link>
  )
}

export default WorkoutPlanCard