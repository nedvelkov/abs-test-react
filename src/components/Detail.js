import React from "react";

function Detail() {
  return (
    <>
      <h3 className="text-md-center">Display system details</h3>
      <div className="col-md-6 offset-md-3" id="container">
        <div className="card card-body bg-light">
          <label className="font-weight-bold selectObj">AirportsTitle</label>
          <ul id="airports"></ul>
          <label className="font-weight-bold">AirlinesTitle</label>
          <div id="airlines"></div>
        </div>
      </div>
    </>
  );
}

export default Detail;
