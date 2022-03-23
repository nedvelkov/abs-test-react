import React from "react";
import Airline from "../components/Airline";
import { fetchData } from "../utils/functions";

function Detail() {
  const [data, setData] = React.useState({ airlineList: [], airportList: [] });

  const [response, setResponse] = React.useState({ toggle: true, error: "" });

  React.useEffect(() => {
    const path = "https://localhost:1618/api/system";
    const error = "Wellcome to Airline booking system";
    const statusCode = 204;
    const getData = fetchData(path, error, statusCode);
    getData.then((resp) => {
      if (typeof resp === "string") {
        return setResponse({ toggle: false, error: resp });
      }
      return setData(resp);
    });
    return () => {};
  }, []);

  const listAirports = data.airportList.map((x, i) => (
    <li key={i}>Airport {x} is available for all airlines and flights</li>
  ));

  const listAirlines = data.airlineList.map((x, i) => (
    <Airline key={i} name={x.name} flights={x.flights} />
  ));

  return (
    <>
      <h3 className="text-md-center">Display system details</h3>
      <div className="col-md-6 offset-md-3" id="container">
        {response.toggle && (
          <div className="card card-body bg-light">
            <label className="font-weight-bold">Airports aviable</label>
            <ul id="airports">{listAirports[0] && listAirports}</ul>
            <label className="font-weight-bold">Airlines aviable</label>
            <div id="airlines">
              <ul>{listAirlines}</ul>
            </div>
          </div>
        )}
        {!response.toggle && (
          <div className="card card-body bg-light">{response.error}</div>
        )}
      </div>
    </>
  );
}

export default Detail;
