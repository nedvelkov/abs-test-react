import React from "react";
import plane from "../plane.gif";

function Home() {
  return (
    <>
      <h3 className="text-md-center">Wellcome to Airline booking system</h3>
      <div className="col-md-6 offset-md-3">
        <div className="card card-body bg-light d-flex justify-content-center">
          <div className="d-flex justify-content-center">
            <iframe
              src={plane}
              width="480"
              height="270"
              frameBorder="0"
            ></iframe>
          </div>
          <h6 className="d-flex justify-content-center">
            Register and get access to flight information, all airline and
            airports.Plan your trip and book your ticket now!
          </h6>
        </div>
      </div>
    </>
  );
}

export default Home;
