import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const { getItem, setItem, removeItem } = useLocalStorage();
  const { token, setToken, api } = useContext(AuthContext);

  useEffect(() => {
    const token = getItem("token");
    if (token) {
      setToken(`${token}`);
    }
  }, []);

  const login = (token) => {
    setToken(`${token}`);
    setItem("token", `${token}`);
  };

  const logout = () => {
    setToken(null);
    removeItem("token");
  };

  console.log("useAuth " + token);

  return { token, login, logout, api };
};
