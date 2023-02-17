import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import WorkoutPlanCard from '../components/WorkoutPlanCard'
import '../styles/ViewWorkoutPlans.css'



const ViewWorkoutPlans = () => {

  const [workoutPlans, setWorkoutPlans] = useState([])

  useEffect(() => {
    const getWorkoutPlans = async () => {
      const response = await axios.get(`/api/workoutPlans`)
      setWorkoutPlans(response.data.workoutPlans);

    }

    getWorkoutPlans()

  }, [])


  return (
    <div>
      <div className='quote'>
        <h1>Let's goooooo.</h1>
      </div>
      <div className='workouts-container'>
        {workoutPlans.map(workout => (
          <div className='workoutPlanBlock' key={workout._id}>
            <WorkoutPlanCard
              planLink={workout._id}
              name={workout.name}
              time={workout.time}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewWorkoutPlans
