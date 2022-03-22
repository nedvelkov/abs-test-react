import React from "react";
import Flight from "../components/Flight";

function FindFlights() {
  const [airportList, setAirportList] = React.useState([]);

  const [findFlight, setFindFlight] = React.useState({
    origin: "",
    destination: "",
  });

  const [flights, setFlights] = React.useState([
    {
      airlineName: "",
      date: "",
      destination: "",
      id: "",
      origin: "",
    },
  ]);

  const [resp, setResp] = React.useState({ toggle: false, error: "" });

  React.useEffect(() => {
    async function getFlights() {
      const res = await fetch("https://localhost:1618/api/airports");
      const resData = await res.json();
      return resData;
    }
    getFlights().then((x) => setAirportList(x));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setFindFlight((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const airports = airportList.map((x, i) => (
    <option key={i} value={x}>
      {x}
    </option>
  ));

  async function handleSubmit(event) {
    event.preventDefault();
    if(findFlight.origin===findFlight.destination){
      setResp({toggle:true,error:"Destionation must be different from origin"});
      return;
    }
    const res = await findAvailableFlights(findFlight);
    console.log(typeof res);
    if (typeof res === "string") {
      setResp({ toggle: true, error: res });
      return;
    }
    setFlights(res);
    setResp({ toggle: true, error: "" });
  }

  async function findAvailableFlights(props) {
    const path = `https://localhost:1618/api/aviableflights?origin=${props.origin}&destination=${props.destination}`;
    const res = await fetch(path);
    if (res.status === 204) {
      return `There is no flight from ${props.origin} to ${props.destination}, at this time`;
    } else if (res.status !== 200) {
      return "Unexpected error. Please try again";
    }
    const resData = await res.json();
    return resData;
  }

  const error = <span className="text-danger">{resp.error}</span>;
  const flightElements =
    resp.error !== ""
      ? error
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
                value={findFlight.origin}
                onChange={handleChange}
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
                value={findFlight.destination}
                onChange={handleChange}
                name="destination"
              >
                <option></option>
                {airports}
              </select>
            </div>

            <div className="form-group">
              <button>Find flights</button>
              <ul>{resp.toggle && flightElements}</ul>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FindFlights;
