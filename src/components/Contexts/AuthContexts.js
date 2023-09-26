// import React, { useState } from "react";

// const AuthContext = React.createContext({});
// export const AuthProvider = ({ children }) => {
//   const [userInfo, setUserInfo] = useState({
//     token: null,
//   });

//   return (
//     <AuthContext.Provider value={{ userInfo, setUserInfo }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;

import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const login = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null); // Remove the token from the context state
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
export default AuthContext



