// src/context/AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    token: null,
    restaurantId: null,
  });

  const setLogin = (token, restaurantId) => {
    setAuth({
      isAuthenticated: true,
      token: token,
      restaurantId: restaurantId,
    });
  };

  const logout = () => {
    setAuth({
      isAuthenticated: false,
      token: null,
      restaurantId: null,
    });
  };

  return (
    <AuthContext.Provider value={{ ...auth, setLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
