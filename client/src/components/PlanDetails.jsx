import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/PlanDetails.css'

const PlanDetails = ({ name, time, description, workouts, setWorkouts }) => {

  const handleDelete = async (workoutId) => {
    await axios.delete(`http://localhost:3001/api/workouts/${workoutId}`)
    setWorkouts(prevWorkouts => prevWorkouts.filter(workout => workout._id !== workoutId))
  }
  
  return (
    <div>
      <div className='plan-card'>
        <h1>{name}</h1>
        <h2>{description}</h2>
        <h3>{time}</h3>

        {workouts.map(workout => (
          <div key={workout._id} className="workout-block">
            <Link to={`/workouts/${workout._id}`} style={{ textDecoration: 'none' }}>
              <h3>{workout.name}</h3>
            </Link>
            <button onClick={() => handleDelete(workout._id)}>Delete</button>
          </div>
        ))}


      </div>
    </div>
  )
}

export default PlanDetails