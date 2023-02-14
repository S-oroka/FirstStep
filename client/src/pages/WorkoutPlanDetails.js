import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PlanDetails from '../components/PlanDetails'


const WorkoutPlanDetails = () => {

  const [selectedPlan, setSelectedPlan] = useState(null)

  let { planLink } = useParams()

  useEffect(() => {
    const setPlan = async () => {
      const response = await axios.get(`http://localhost:3001/api/workoutPlans/details/${planLink}`)
      setSelectedPlan(response.data.plan);
   }
    setPlan()
    
  }, [planLink])
console.log(selectedPlan);

  return selectedPlan && (
    <div>
      <div>
      {<PlanDetails
          name={selectedPlan.name}
          description={selectedPlan.description}
          time={selectedPlan.time}
          workouts={selectedPlan.workouts} />}
          </div>
    </div>
  )
}

export default WorkoutPlanDetails
