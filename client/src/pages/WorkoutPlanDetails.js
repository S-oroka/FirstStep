import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PlanDetails from '../components/PlanDetails'


const WorkoutPlanDetails = () => {

  const [selectedPlan, setSelectedPlan] = useState(null)

  let { planLink } = useParams()



// useEffect(() => {
//   let selected
// })


  useEffect(() => {
    const setPlan = async () => {
      const response = await axios.get(`http://localhost:3001/api/workoutPlans/details/${planLink}`)
      setSelectedPlan(response);
   }
    setPlan()
    
  }, [])

  return (
    <div>
      <PlanDetails
          name={selectedPlan.name}
          description={selectedPlan.description}
          time={selectedPlan.time}
          workouts={selectedPlan.workouts} />
    </div>
  )
}

export default WorkoutPlanDetails
