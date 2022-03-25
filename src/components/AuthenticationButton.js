import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton ";
import SignupButton from "./SignupButton ";

import { useAuth0 } from "@auth0/auth0-react";

function AuthenticationButton() {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <LogoutButton />
  ) : (
    <div className="d-flex justify-content-around">
      <LoginButton />
      
      <SignupButton />
    </div>
  );
}

export default AuthenticationButton;
