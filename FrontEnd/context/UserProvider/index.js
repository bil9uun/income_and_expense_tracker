import React, { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");

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
      setUserId(data.user.id);
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
  const signup = async () => {
    if (
      !formUserData.email ||
      !formUserData.password ||
      !formUserData.rePassword ||
      !formUserData.name
    ) {
      alert("Хоосон талбаруууд байж болохгүй");
      return;
    }

    if (formUserData.password !== formUserData.rePassword) {
      alert("Нууц үг хоорондоо тохирохгүй байна.");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:8008/auth/signup", {
        email: formUserData.email,
        password: formUserData.password,
        name: formUserData.name,
      });
      console.log(data);
      setUser(data.user);
      router.push("/step-one");
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`, { autoClose: 3000 });
    }
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
