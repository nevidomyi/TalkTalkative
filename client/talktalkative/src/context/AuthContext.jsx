import { createContext, useState, useEffect } from "react";
import { createAPI } from "../api/API";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const userToken = localStorage.getItem("token");
  const [token, setToken] = useState(userToken);
  const [api, setAPI] = useState(createAPI(token));

  useEffect(() => {
    setAPI(createAPI(token));
  }, []);

  const { Provider } = AuthContext;

  return <Provider value={{ api, token, setToken }}>{children}</Provider>;
};
