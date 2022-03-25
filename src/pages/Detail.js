import React from "react";
import Airline from "../components/Airline";
import { fetchGetRequest } from "../utils/functions";
import { useAuth0 } from "@auth0/auth0-react";

function Detail() {
  const [data, setData] = React.useState({ airlineList: [], airportList: [] });

  const [response, setResponse] = React.useState({ toggle: true, error: "" });

  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const seedData = async () => {
    try {
      const token = await getAccessTokenSilently();
      if (token === undefined) {
        return;
      }
      const path = "https://localhost:1618/api/system";
      const error = "Wellcome to Airline booking system";
      const statusCode = 204;
      const resp = await fetchGetRequest(path, error, statusCode, token);
      if (typeof resp === "string") {
        setResponse({ toggle: false, error: resp });
      }
      setData(resp);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    seedData();
  }, [isAuthenticated]);

  const listAirports = data.airportList.map((x, i) => (
    <li key={i}>Airport {x} is available for all airlines and flights</li>
  ));

  const listAirlines = data.airlineList.map((x, i) => (
    <Airline key={i} name={x.name} flights={x.flights} />
  ));

  return (
    <>
      <h3 className="text-md-center">Flight information</h3>
      <div className="col-md-6 offset-md-3" id="container">
        <div className="card card-body bg-light">
          {!isAuthenticated && (
            <div className="d-flex justify-content-center">
              Log in your account
            </div>
          )}
          {isAuthenticated && response.toggle && (
            <>
              <label className="font-weight-bold selectObj" onClick={seedData}>
                Airports aviable
              </label>
              <ul id="airports">{listAirports[0] && listAirports}</ul>
              <label className="font-weight-bold">Airlines aviable</label>
              <div id="airlines">
                <ul>{listAirlines}</ul>
              </div>
            </>
          )}
        </div>

        {isAuthenticated && response.toggle && (
          <div className="card card-body bg-light">{response.error}</div>
        )}
      </div>
    </>
  );
}

export default Detail;
