import React from "react";
import { NavLink } from "react-router-dom";

function MainNav() {
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
        to="/details"
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Flight information
      </NavLink>
      <NavLink
        to="/findflights"
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Find flights
      </NavLink>
      <NavLink
        to="/bookseat"
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Book seat
      </NavLink>
      <NavLink
        to="/profile"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Profile
      </NavLink>
    </div>
  );
}

export default MainNav;
