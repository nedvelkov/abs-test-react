import React from "react";
import MainNav from "./MainNav";
import AuthNav from "./AuthNav";
import AdminNav from "./AdminNav";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { user } = useAuth0();
  const navbar = () => {
    if (user) {
      const role =
        user["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"][0];
      return role === "admin" ? <AdminNav /> : <MainNav />;
    }
    return <MainNav />;
  };
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          {navbar()}
          <AuthNav />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
