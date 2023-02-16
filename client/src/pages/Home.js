import React from 'react'
import '../styles/Home.css'

const Home = () => {
  return (
    <div>
      <div className='intro-banner'>
        <h1 className='welcome'>This is your FirstStep.</h1>
          <h2 className='description'>A fitness app determined to support and enhance your fitness journey.</h2>
      </div>
      <div className='quote-banner'>
        "The first step can happen any and every day."
      </div>
    </div>
  )
}

export default Home
