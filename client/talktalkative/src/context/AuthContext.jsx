import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const { Provider } = AuthContext;

  return <Provider value={{ user, setUser }}>{children}</Provider>;
};
