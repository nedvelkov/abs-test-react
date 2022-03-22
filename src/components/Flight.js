import React from "react";
import FlightSection from "./FlightSection";

function Flight(props) {
  const date = props.date.split("T")[0];

  const [sections, setSeactions] = React.useState([
    {
      id: "",
      seatClass: "",
      seats: "",
    },
  ]);
  const [toggle, setToggle] = React.useState(false);

  async function getFlightSections(flightId) {
    setToggle((prev) => !prev);
    if (toggle) {
      return;
    }
    const res = await fetch(
      `https://localhost:1618/api/sections?flightId=${flightId}`
    );
    const resData = await res.json();
    setSeactions(resData);
    console.log(resData)
  }

  const sectionElements = sections.map((x, i) => {
    return <FlightSection key={i} {...x} />;
  });

  return (
    <li>
      <span className="selectObj"  onClick={() => getFlightSections(props.id)}>
        {`Flight #${props.id.trim()} from ${props.origin} to ${
          props.destination
        } on airline ${props.airlineName}.Departure at ${date}`}
      </span>
      {toggle && <ul>{sectionElements}</ul>}
    </li>
  );
}

export default Flight;
