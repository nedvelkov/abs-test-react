import React from "react";
import { Link } from "react-router-dom";
import AuthNav from "./AuthNav";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
        <div className="container">
          <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
            <ul className="navbar-nav flex-grow-1">
              <li className="nav-item">
                <Link to="/" className="nav-link text-dark">
                  Details
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/findflights" className="nav-link text-dark">
                  Find flights
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/bookseat" className="nav-link text-dark">
                  Book seat
                </Link>
              </li>
              <li>
                <AuthNav />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
