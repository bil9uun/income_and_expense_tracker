import React from "react";
import { useRouter } from "next/router";
import { useContext } from "react";

import { UserContext } from "@/context/UserProvider";

import Logo from "@/components/svg/Logo";
import Geld from "@/components/svg/Geld";

const LogIn = () => {
  const Router = useRouter();
  const { formUserData, changeFormUserData, login, loading } =
    useContext(UserContext);
  return (
    <div className=" bg-white w-screen h-screen flex">
      <div className="flex flex-1 w-full h-full justify-center items-center">
        <div className=" w-96 h-1/2 items-center">
          <div className="flex justify-center items-center mb-10">
            <Logo />
            <Geld />
          </div>
          <div className="flex flex-col justify-center items-center mb-10">
            <h1 className=" text-slate-900 text-2xl font-semibold mb-1">
              Welcome Back
            </h1>
            <p className="text-slate-700 text-base">
              Welcome back, Please enter your details
            </p>
          </div>
          <div className="flex justify-center mb-4">
            <input
              type="text"
              name="email"
              onChange={(e) => {
                changeFormUserData(e.target.name, e.target.value);
              }}
              placeholder="Email"
              class=" bg-[#F3F4F6] text-black input input-bordered input-md w-full max-w-xs"
            />
          </div>
          <div className="flex justify-center mb-4">
            <input
              type="password"
              name="password"
              onChange={(e) => {
                changeFormUserData(e.target.name, e.target.value);
              }}
              placeholder="Password"
              class=" bg-[#F3F4F6] text-black input input-bordered input-md w-full max-w-xs"
            />
          </div>
          <div className="mb-10">
            <button
              onClick={login}
              disabled={loading}
              class="btn btn-info w-full rounded-3xl text-white bg-[#0166FF]"
            >
              Log In
            </button>
          </div>
          <div className="flex justify-center">
            <p className="text-slate-900 mr-2">Don't have account?</p>
            <button
              onClick={() => {
                Router.push("/SignUp");
              }}
              className="text-[#0166FF] "
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-[#0166FF] h-full w-full flex-1"></div>
    </div>
  );
};

export default LogIn;
