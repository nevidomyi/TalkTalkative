import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocalStorage } from "./useLocalStorage";

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const addUser = (user) => {
    console.log(user);
    setUser(user);
    setItem("user", JSON.stringify(user));
    console.log(
      "User has been added to localStorage" + localStorage.getItem("user")
    );
  };

  const removeUser = () => {
    setUser(null);
    setItem("user", "");
  };

  return { user, removeUser, addUser };
};
