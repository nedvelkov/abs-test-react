import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
      <div className="container">
        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
          <ul className="navbar-nav flex-grow-1">
            <li className="nav-item" onClick={() => props.selectPage("detail")}>
              ABS details
            </li>
            <li
              className="nav-item"
              onClick={() => props.selectPage("findFlights")}
            >
              Find flights
            </li>
            <li
              className="nav-item"
              onClick={() => props.selectPage("bookSeat")}
            >
              Book seat
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
