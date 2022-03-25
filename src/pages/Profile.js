import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  async function getToken() {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    return await useAuth0().getAccessTokenSilently({
      audience: `https://${domain}/api/v2/`,
    });
  }

  let value;
  getToken().then((x) => {
    value = x;
    return console.log(value);
  });
  console.log(value);

  return (
    <div>
      {isAuthenticated && (
        <div className="row align-items-center profile-header">
          <div className="col-md-2 mb-3">
            <img
              src={user.picture}
              alt="Profile"
              className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
            />
          </div>
          <div className="col-md text-center text-md-left">
            <h2>{user.name}</h2>
            <p className="lead text-muted">{user.email}</p>
          </div>
        </div>
      )}
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Profile;
