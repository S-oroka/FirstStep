import React from 'react'
import { Link } from 'react-router-dom'

const PlanDetails = ({ name, time, description, workouts }) => {
  return (
    <div>
      <div className='plan-card'>
        <h1>{name}</h1>
        <h2>{description}</h2>
        <h3>{time}</h3>

        {workouts.map(workout => (
          <Link to={`/start`}>
            <h3 key={workout._id}>
              {workout.name}</h3></Link>
        ))}

      </div>
    </div>
  )
}

export default PlanDetails
