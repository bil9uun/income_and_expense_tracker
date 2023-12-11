import React from "react";
import { createContext, useState } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Saraa", age: "20" });
  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  );
};

export default UserProvider;
