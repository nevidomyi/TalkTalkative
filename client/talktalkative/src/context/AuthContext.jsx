import { createContext, useEffect, useState } from "react";
import { createAPI } from "../api/API";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const userToken = localStorage.getItem("token");
  const [token, setToken] = useState(userToken);
  const [api, setAPI] = useState(createAPI(token));

  const login = (token) => {
    setToken(token);
    setAPI(createAPI(token));
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setToken(null);
    setAPI(createAPI(""));
    localStorage.removeItem("token");
  };

  const { Provider } = AuthContext;

  return <Provider value={{ api, token, login, logout }}>{children}</Provider>;
};
