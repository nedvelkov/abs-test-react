import React from "react";
import { NavLink } from "react-router-dom";

function AdminNav() {
  return (
    <div className="navbar-nav mr-auto">
      <NavLink
        to="/"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Home
      </NavLink>
      <NavLink
        to="/airport"
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Create airport
      </NavLink>
      <NavLink
        to="/findflights"
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Create airline
      </NavLink>
      <NavLink
        to="/airline"
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Book seat
      </NavLink>
      <NavLink
        to="/flight"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Create flight
      </NavLink>
      <NavLink
        to="/section"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Create flight
      </NavLink>
    </div>
  );
}

export default AdminNav;
