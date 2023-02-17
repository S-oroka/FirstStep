import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PlanDetails from '../components/PlanDetails'
import Form from '../components/Form'
import '../styles/WorkoutPlanDetails.css'


const WorkoutPlanDetails = () => {

  const [selectedPlan, setSelectedPlan] = useState()
  const [workouts, setWorkouts] = useState([])

  let { planLink } = useParams()

  useEffect(() => {
    const setPlan = async () => {
      const response = await axios.get(`http://localhost:3001/api/workoutPlans/details/${planLink}`)
      setSelectedPlan(response.data.plan);
      setWorkouts(response.data.plan.workouts)
    }
    setPlan()

  }, [planLink])


  return selectedPlan && (
    <div className='workout-and-form'>
      
        {<PlanDetails
          name={selectedPlan.name}
          description={selectedPlan.description}
          time={selectedPlan.time}
          workouts={workouts}
          setWorkouts={setWorkouts} />}
      
      <div className='form'>
        <h2>Create Workout</h2>
        <Form planId={selectedPlan._id} setWorkouts={setWorkouts} />
      </div>
    </div>
  )
}


export default WorkoutPlanDetails