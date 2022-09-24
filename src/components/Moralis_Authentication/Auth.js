import React, { useEffect } from 'react';

import { useMoralis } from "react-moralis";

import { Loginform } from '../Forms/Loginform';

function Auth() {

    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
   
    useEffect(() => {
    if (isAuthenticated) {
       
    }
   
  }, [isAuthenticated]);

    const login = async () => {
      if (!isAuthenticated) {

        await authenticate({signingMessage: "Log in using Moralis" })
          .then(function (user) {
            
            console.log("logged in user:", user);
            console.log(user)
            console.log(user.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

    const logOut = async () => {
      await logout();
      console.log("logged out");
    }

  return (
    <>
    {!isAuthenticated ?
    <div>
      <h1>Moralis Hello World!</h1>
      <button onClick={login}>Moralis Metamask Login</button>
   
    </div> :[<Loginform user={user}/>,
    
    <button onClick={logOut} disabled={isAuthenticating}>Logout</button>]
      }
    </>
  );
}

export default Auth;