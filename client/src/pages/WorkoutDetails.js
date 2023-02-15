import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Workout from '../components/Workout'


const WorkoutDetails = () => {

  const [selectedWorkout, setSelectedWorkout] = useState([])

  let { workoutLink } = useParams()


  useEffect(() => {
    const setWorkout = async () => {
      const response = await axios.get(`http://localhost:3001/api/workouts/${workoutLink}`)
      setSelectedWorkout(response.data.plan);

    }
    setWorkout()

  }, [workoutLink])


  return (
    <div>
      <Workout 
      name={selectedWorkout.name}
      description={selectedWorkout.description}/>
    </div>
  )
}

export default WorkoutDetails
