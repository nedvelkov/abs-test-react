import React from "react";
import Airline from "../components/Airline";

function Detail() {
  const [data, setData] = React.useState({ airlineList: [], airportList: [] });

  React.useEffect(() => {
    async function getSystemDetails() {
      const res = await fetch("https://localhost:1618/api/system");
      const resData = await res.json();
      setData(resData);
    }
    getSystemDetails();
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
        <div className="card card-body bg-light">
          <label className="font-weight-bold">Airports aviable</label>
          <ul id="airports">{listAirports[0] && listAirports}</ul>
          <label className="font-weight-bold">Airlines aviable</label>
          <div id="airlines">
            <ul>{listAirlines}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
