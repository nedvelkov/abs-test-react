import React from "react";
import Flight from "./Flight";

function Airline(props) {
  const [flights, setFlights] = React.useState([
    {
      airlineName: "",
      date: "",
      destination: "",
      id: "",
      origin: "",
    },
  ]);
  const [toggle, setToggle] = React.useState(false);

  async function getFlights(airlineName) {
    setToggle((prev) => !prev);
    if (toggle) {
      return;
    }
    const res = await fetch(
      `https://localhost:1618/api/flightsbyname?airlineName=${airlineName}`
    );
    const resData = await res.json();
    setFlights(resData);
  }

  const flightElements = flights.map((x, i) => {
    return <Flight key={i} {...x} />;
  });

  // onClick={() => getFlights(props.name)}
  return (
    <li className="airlineTitle" onClick={() => getFlights(props.name)}>
      <span className="selectObj">
        Airline {props.name} offers {props.flights} flights
      </span>
      {toggle && <ul>{flightElements}</ul>}
    </li>
  );
}

export default Airline;
