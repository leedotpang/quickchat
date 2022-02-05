import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);

  const signIn = (newUser) => {
    if (!newUser) return;
    setUser(newUser);
    localStorage.setItem("qc-user", newUser);
  };

  const logOut = () => {
    setUser(null);
    localStorage.clear();
  };

  const value = {
    user,
    signIn,
    logOut,
  };

  useEffect(() => {
    signIn(localStorage.getItem("qc-user"));
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
