import React from "react";

function FindFlights() {
  return (
    <>
      <div className="col-md-6 offset-md-3" id="container">
        <div className="card card-body bg-light">
          <form method="post">
            <div className="form-group">
              <p className="mb-0">
                <label>Origin</label>
              </p>

              <select className="form-control">
                <option></option>
                <option>@airport</option>
              </select>
            </div>

            <div className="form-group">
              <p className="mb-0">
                <label>Destination</label>
              </p>
              <select className="form-control">
                <option></option>
                <option>@airport</option>
              </select>
            </div>

            <div className="form-group">
              <button type="submit">Find flights</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FindFlights;
