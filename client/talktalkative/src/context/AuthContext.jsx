import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const userToken = JSON.parse(localStorage.getItem("token"));
  const [token, setToken] = useState(userToken);
  const [client, setClient] = useState();

  useEffect(() => {
    setClient(
      axios.create({
        baseURL: "http://localhost:3001",
        headers: { Authorization: token },
      })
    );
  }, [token]);

  const { Provider } = AuthContext;

  return <Provider value={{ client, token, setToken }}>{children}</Provider>;
};
