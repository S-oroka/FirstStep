import React from 'react'
import '../styles/WorkoutPlanCard.css'

const WorkoutPlanCard = ({name, time, description, workouts}) => {
  return (
    <div className='card'>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <h3>{time}</h3>
      <h3>{workouts}</h3>
    </div>
  )
}

export default WorkoutPlanCard
