import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const userToken = JSON.parse(localStorage.getItem("token"));
  const [token, setToken] = useState(userToken);
  const [api, setAPI] = useState(createAPI(token));

  useEffect(() => {
    setAPI(createAPI(token));
  }, [token]);

  const { Provider } = AuthContext;

  return <Provider value={{ api, token, setToken }}>{children}</Provider>;
};
