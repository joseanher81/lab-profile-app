import React, { useState, useEffect } from "react";
import { UserContext, loggedin } from "./../services/authService";

export const withAuthentication = Component => () => {
  const [user, setUser] = useState();

  useEffect(() => {
    // Try to get the current logged in user from the backend
    loggedin()
      .then(user => {
        console.log(`Welcome again user ${user.username}`);
        setUser(user);
      })
      .catch(e => {
        console.error("No user logged in ");
      })
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Component />
    </UserContext.Provider>
  );
};