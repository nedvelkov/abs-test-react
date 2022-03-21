import React from "react";

function Flight(props) {
  return (
    <li>{`Flight #${props.id.trim()} from ${props.origin} to ${
      props.destination
    } on airline ${props.airlineName}.Departure at ${props.date}`}</li>
  );
}

export default Flight;
