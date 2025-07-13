import React from 'react'
import { useParams } from 'react-router-dom'

const Appointment = () => {

    const {date} = useParams()
  return (
    <div>
      <h1>Manage Appointments for {date}</h1>

    </div>
  )
}

export default Appointment
