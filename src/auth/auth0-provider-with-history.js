import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useNavigate();
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const scope = "read:current_user update:current_user_metadata";

  const onRedirectCallback = (appState) => {
    //let url2=appState?.returnTo;
    let url = window.location.pathname;
    history.push("http://localhost:3000/");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={`https://${domain}/api/v2/`}
      scope={scope}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
