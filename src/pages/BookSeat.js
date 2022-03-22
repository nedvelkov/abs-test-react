import React from "react";

function BookSeat() {
  const [data, setData] = React.useState({ flights: [], airlines: [] });

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
      responseData.flights = await fetchData(
        "https://localhost:1618/api/flights"
      );
      responseData.airlines = await fetchData(
        "https://localhost:1618/api/airlines"
      );
      return responseData;
    }

    getData().then((x) => setData(x));
     return ()=>{}
  }, []);

  async function fetchData(path) {
    const res = await fetch(path);
    const resData = await res.json();
    return resData;
  }

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

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <h3 className="text-md-center">Book seat</h3>
      <div className="col-md-6 offset-md-3">
        <div className="card card-body bg-light">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <p className="mb-0">
                <label>Id</label>
              </p>
              <select
                className="form-control"
                id="flightId"
                value={formData.flightId}
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
                name="row"
              />
            </div>

            <div className="form-group">
              <label>Column</label>
              <select
                className="form-control"
                id="column"
                value={formData.column}
                onChange={handleChange}
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
                onChange={handleChange}
                name="seatClass"
              >
                <option></option>
                <option value="1">First className</option>
                <option value="2">Business className</option>
                <option value="3">Economy className</option>
              </select>
            </div>

            <div className="form-group">
              <button>Book seat</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookSeat;
