import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);

  const signIn = (newUser) => {
    setUser(newUser);
    window.alert("logged in");
  };

  const logOut = () => {
    setUser(null);
    window.alert("logged out");
  };

  const value = {
    user,
    signIn,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
