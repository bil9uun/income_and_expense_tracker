import React, { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formUserData, setFormUserData] = useState({
    email: "",
    password: "",
    rePassword: "",
    name: "",
    currency_type: "",
    balance: "",
  });

  const changeFormUserData = (key, value) => {
    setFormUserData({ ...formUserData, [key]: value });
  };

  const login = async () => {
    console.log("email", formUserData.email);
    console.log("pass", formUserData.password);
    if (!formUserData.email || !formUserData.password) {
      alert("Email esvel Password buglunu uu");
      return;
    }
    try {
      setLoading(true);
      const { data } = await axios.post("http://localhost:8008/auth/logIn", {
        userEmail: formUserData.email,
        userPassword: formUserData.password,
      });
      console.log("data.user", data.user);
      setUser(data.user);
      router.push("/");
    } catch (error) {
      console.log("error", error);
      toast.error(`${error.message}`, { autoClose: 3000 });
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        formUserData,
        changeFormUserData,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
