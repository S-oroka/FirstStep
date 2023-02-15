import React from 'react'
import { Link } from 'react-router-dom'

const Workout = ({ name, description }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{description}</h2>
    </div>
  )
}

export default Workout
