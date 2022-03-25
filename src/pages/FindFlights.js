import React from "react";
import Flight from "../components/Flight";
import { fetchGetRequest, handleChange } from "../utils/functions";
import { flightObj } from "../utils/objects";
import { useAuth0 } from "@auth0/auth0-react";

function FindFlights() {
  const [airportList, setAirportList] = React.useState([]);
  const [answer, setAnswer] = React.useState({ toggle: false, error: "" });
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const seedData = async () => {
    try {
      const token = await getAccessTokenSilently();
      if (token === undefined) {
        return;
      }
      const path = "https://localhost:1618/api/airports";
      const error = "Currently there is no available airports";
      const statusCode = 204;
      const resp = await fetchGetRequest(path, error, statusCode, token);
      return setAirportList(resp);
    } catch (error) {
      console.log(error);
    }
  };

  const [formData, setFormData] = React.useState({
    origin: "",
    destination: "",
  });

  const [flights, setFlights] = React.useState([flightObj]);

  React.useEffect(() => {
    seedData();
  }, [isAuthenticated]);

  const airports = airportList.map((airport, index) => (
    <option key={index} value={airport}>
      {airport}
    </option>
  ));

  async function handleSubmit(event) {
    event.preventDefault();

    if (formData.origin === formData.destination) {
      setAnswer({
        toggle: true,
        error: "Destination must be different from origin",
      });
      return;
    }

    const path = `https://localhost:1618/api/aviableflights?origin=${formData.origin}&destination=${formData.destination}`;
    const error = `There is no flight from ${formData.origin} to ${formData.destination}, at this time`;
    const statusCode = 204;
    const data = await fetchGetRequest(path, error, statusCode);

    if (typeof data === "string") {
      setAnswer({ toggle: true, error: data });
      return;
    }
    setFlights(data);
    setAnswer({ toggle: true, error: "" });
  }

  const errorMessage = <span className="text-danger">{answer.error}</span>;
  const flightElements =
    answer.error !== ""
      ? errorMessage
      : flights.map((x, i) => <Flight key={i} {...x} />);
  return (
    <>
      <h3 className="text-md-center">Find available flights</h3>
      <div className="col-md-6 offset-md-3" id="container">
        <div className="card card-body bg-light">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <p className="mb-0">
                <label>Origin</label>
              </p>
              <select
                className="form-control"
                id="origin"
                value={formData.origin}
                onChange={(event) => handleChange(event, setFormData)}
                name="origin"
              >
                <option></option>
                {airports}
              </select>
            </div>
            <div className="form-group">
              <p className="mb-0">
                <label>Destination</label>
              </p>
              <select
                className="form-control"
                id="destination"
                value={formData.destination}
                onChange={(event) => handleChange(event, setFormData)}
                name="destination"
              >
                <option></option>
                {airports}
              </select>
            </div>

            <div className="form-group">
              <button>Find flights</button>
              <ul>{answer.toggle && flightElements}</ul>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FindFlights;
