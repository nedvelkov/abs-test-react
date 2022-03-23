import React from "react";
import { fetchData, handleChange } from "../utils/functions";

function BookSeat() {
  const [data, setData] = React.useState({ flights: [], airlines: [] });

  const [response, setResponse] = React.useState({
    toggle: true,
    error: "",
  });

  const [formData, setFormData] = React.useState({
    flightId: "",
    airline: "",
    seatClass: "",
    row: "",
    column: "",
  });

  React.useEffect(() => {
    async function getData() {
      const responseData = { flights: [], airlines: [] };
      const statusCode = 204;

      const pathFlights = "https://localhost:1618/api/flights";
      const errorFlights = "No flights available";
      responseData.flights = await fetchData(
        pathFlights,
        errorFlights,
        statusCode
      );

      const pathAirlines = "https://localhost:1618/api/airlines";
      const errorAirlines = "No airlines available";
      responseData.airlines = await fetchData(
        pathAirlines,
        errorAirlines,
        statusCode
      );

      if (typeof responseData.airlines === "string") {
        setResponse({ toggle: false, error: responseData.airlines });
        return;
      }
      if (typeof responseData.flights === "string") {
        setResponse({ toggle: false, error: responseData.flights });
        return;
      }
      return responseData;
    }

    if (response.toggle) {
      getData().then((x) => setData(x));
    }

    return () => {};
  }, []);

  const flights = data.flights.map((x, i) => (
    <option key={i} value={x}>
      {x}
    </option>
  ));

  const airlines = data.airlines.map((x, i) => (
    <option key={i} value={x}>
      {x}
    </option>
  ));

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <h3 className="text-md-center">Book seat</h3>
      <div className="col-md-6 offset-md-3">
        <div className="card card-body bg-light">
          {response.toggle && (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <p className="mb-0">
                  <label>Id</label>
                </p>
                <select
                  className="form-control"
                  id="flightId"
                  value={formData.flightId}
                  onChange={(event) => handleChange(event, setFormData)}
                  name="flightId"
                >
                  <option></option>
                  {flights}
                </select>
              </div>

              <div className="form-group">
                <p className="mb-0">
                  <label>Airline name</label>
                </p>
                <select
                  className="form-control"
                  id="airline"
                  value={formData.airline}
                  onChange={(event) => handleChange(event, setFormData)}
                  name="airline"
                >
                  <option></option>
                  {airlines}
                </select>
              </div>

              <div className="form-group dropdownCss">
                <label>Row</label>
                <input
                  type="number"
                  className="form-control"
                  id="row"
                  value={formData.row}
                  onChange={(event) => handleChange(event, setFormData)}
                  name="row"
                />
              </div>

              <div className="form-group">
                <label>Column</label>
                <select
                  className="form-control"
                  id="column"
                  value={formData.column}
                  onChange={(event) => handleChange(event, setFormData)}
                  name="column"
                >
                  <option></option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                  <option value="G">G</option>
                  <option value="H">H</option>
                  <option value="I">I</option>
                  <option value="J">J</option>
                </select>
              </div>

              <div className="form-group dropdownCss">
                <label>Seat class</label>
                <select
                  className="form-control"
                  id="seatClass"
                  value={formData.seatClass}
                  onChange={(event) => handleChange(event, setFormData)}
                  name="seatClass"
                >
                  <option></option>
                  <option value="1">First class</option>
                  <option value="2">Business class</option>
                  <option value="3">Economy class</option>
                </select>
              </div>

              <div className="form-group">
                <button>Book seat</button>
              </div>
            </form>
          )}
          {!response.toggle && (
            <div className="card card-body bg-light">{response.error}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default BookSeat;
