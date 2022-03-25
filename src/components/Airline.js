import React from "react";
import Flight from "./Flight";
import { flightObj } from "../utils/objects";
import { fetchGetRequest } from "../utils/functions";
import { useAuth0 } from "@auth0/auth0-react";

function Airline(props) {
  const [flights, setFlights] = React.useState([flightObj]);
  const [toggle, setToggle] = React.useState(false);
  const { getAccessTokenSilently } = useAuth0();

  async function getFlights(airlineName) {
    setToggle((prev) => !prev);
    if (toggle) {
      return;
    }
    const token = await getAccessTokenSilently();
    if (token === undefined) {
      return;
    }
    const path = `https://localhost:1618/api/flightsbyname?airlineName=${airlineName}`;
    const error = `This airline don't have flights, at this time`;
    const statusCode = 204;
    const data = await fetchGetRequest(path, error, statusCode, token);
    setFlights(data);
  }

  const flightElements = flights.map((x, i) => {
    return <Flight key={i} {...x} />;
  });

  return (
    <li className="airlineTitle">
      <span className="selectObj" onClick={() => getFlights(props.name)}>
        Airline {props.name} offers {props.flights} flights
      </span>
      {toggle && <ul>{flightElements}</ul>}
    </li>
  );
}

export default Airline;
