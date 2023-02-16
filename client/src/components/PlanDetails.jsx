import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const PlanDetails = ({ name, time, description, workouts, setWorkouts }) => {

  const handleDelete = async (workoutId) => {
    await axios.delete(`http://localhost:3001/api/workouts/${workoutId}`)
    // filter the workouts array to remove the deleted workout
    setWorkouts(prevWorkouts => prevWorkouts.filter(workout => workout._id !== workoutId))
  }
  
  return (
    <div>
      <div className='plan-card'>
        <h1>{name}</h1>
        <h2>{description}</h2>
        <h3>{time}</h3>

        {workouts.map(workout => (
          <div key={workout._id}>
            <Link to={`/workouts/${workout._id}`} >
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