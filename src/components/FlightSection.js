import React from 'react'

function FlightSection(props) {
  return (
    <li>Flight section {props.seatClass} class with {props.seats} seats</li>
  )
}

export default FlightSection