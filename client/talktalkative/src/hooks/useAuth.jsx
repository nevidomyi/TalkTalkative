import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const { getItem, setItem } = useLocalStorage();
  const { token, setToken, api } = useContext(AuthContext);

  useEffect(() => {
    const token = getItem("token");
    if (token) {
      setToken(JSON.parse(token));
    }
  }, []);

  const login = (token) => {
    setToken(token);
    setItem("token", JSON.stringify(token));
  };

  const logout = () => {
    setToken(null);
    setItem("token", "");
  };

  return { token, login, logout, api };
};
