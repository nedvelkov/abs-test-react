import React from "react";

function BookSeat() {
  return (
    <>
      <h3 className="text-md-center">Book seat</h3>
      <div className="col-md-6 offset-md-3">
        <div className="card card-body bg-light">
          <form method="post">
            <div className="form-group">
              <p className="mb-0">
                <label>Id</label>
              </p>
              <select className="form-control">
                <option></option>
              </select>
            </div>

            <div className="form-group">
              <p className="mb-0">
                <label>Airline name</label>
              </p>
              <select className="form-control">
                <option></option>
              </select>
            </div>

            <div className="form-group dropdownCss">
              <label>Row</label>
              <input type="number" className="form-control" />
            </div>

            <div className="form-group">
              <label>Column</label>
              <select className="form-control">
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
              <select className="form-control">
                <option></option>
                <option value="1">First className</option>
                <option value="2">Business className</option>
                <option value="3">Economy className</option>
              </select>
            </div>

            <div className="form-group">
              <button type="submit">Book seat</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookSeat;
