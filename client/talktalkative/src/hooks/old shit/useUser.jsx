import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocalStorage } from "./useLocalStorage";

export const useUser = () => {
  const { token, setToken } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const addUser = (token) => {
    console.log(user);
    setUser(user);
    setItem("user", JSON.stringify(user));
    console.log(
      "User's token has been added to localStorage" + localStorage.getItem("user")
    );
  };

  const removeUser = () => {
    setUser(null);
    setItem("token", "");
  };

  return { user, removeUser, addUser };
};
