import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Workout from '../components/Workout'
import '../styles/WorkoutDetails.css'

const WorkoutDetails = () => {
  const [selectedWorkout, setSelectedWorkout] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState('')
  const [editedDescription, setEditedDescription] = useState('')

  let { workoutLink } = useParams()

  const handleEdit = () => {
    setEditedName(selectedWorkout.name)
    setEditedDescription(selectedWorkout.description)
    setIsEditing(true)
  }

  const handleSave = async () => {
    const response = await axios.put(`/api/workouts/${workoutLink}`, { name: editedName, description: editedDescription })
    setSelectedWorkout(response.data)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  const handleNameChange = (event) => {
    setEditedName(event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setEditedDescription(event.target.value)
  }

  useEffect(() => {
    const setWorkout = async () => {
      const response = await axios.get(`/api/workouts/${workoutLink}`)
      setSelectedWorkout(response.data.plan)
    }
    setWorkout()
  }, [workoutLink])

  if (isEditing) {
    return (
      <div className='edit'>
        <label>Name:</label>
        <input type="text" value={editedName} onChange={handleNameChange} />
        <label>Description:</label>
        <input className='textbox' type="text" value={editedDescription} onChange={handleDescriptionChange} />
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    )
  } else {
    return (
      <div className='workout-block-new'>
        <Workout name={selectedWorkout.name} description={selectedWorkout.description} />
        <button onClick={handleEdit}>Edit Workout</button>
      </div>
    )
  }
}

export default WorkoutDetails
