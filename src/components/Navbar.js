import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
      <div className="container">
        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
          <ul className="navbar-nav flex-grow-1">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                ABS details
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Find flights
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Book seat
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
