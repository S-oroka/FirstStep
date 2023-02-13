import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const WorkoutPlanDetails = () => {

  const [selectedPlan, setSelectedPlan] = useState(null)

  let { planLink } = useParams()

  useEffect(() => {
    const setPlan = async () => {
      const response = await axios.get(`http://localhost:3001/workoutPlans/${planLink}`)
      console.log(response.data);
   }
    setPlan()
  }, [planLink])

  return (
    <div>
      
    </div>
  )
}

export default WorkoutPlanDetails
