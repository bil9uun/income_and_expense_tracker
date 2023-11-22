import React from "react";
import { useRouter } from "next/router";

import Logo from "@/components/svg/Logo";
import Geld from "@/components/svg/Geld";

const SignUp = () => {
  const Router = useRouter();
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
              Create Geld account
            </h1>
            <p className="text-slate-700 text-base">
              Sign up below to create your Wallet account
            </p>
          </div>
          <div className="flex justify-center mb-4">
            <input
              type="text"
              placeholder="Name"
              class=" bg-[#F3F4F6] text-black input input-bordered input-md w-full max-w-xs"
            />
          </div>
          <div className="flex justify-center mb-4">
            <input
              type="text"
              placeholder="Email"
              class=" bg-[#F3F4F6] text-black input input-bordered input-md w-full max-w-xs"
            />
          </div>
          <div className="flex justify-center mb-4">
            <input
              type="text"
              placeholder="Password"
              class=" bg-[#F3F4F6] text-black input input-bordered input-md w-full max-w-xs"
            />
          </div>
          <div className="flex justify-center mb-4">
            <input
              type="text"
              placeholder="Re-Password"
              class=" bg-[#F3F4F6] text-black input input-bordered input-md w-full max-w-xs"
            />
          </div>
          <div className="mb-10">
            <button class="btn btn-info w-full rounded-3xl text-white bg-[#0166FF]">
              Sign Up
            </button>
          </div>
          <div className="flex justify-center">
            <p className="text-slate-900 mr-2">Already have account?</p>
            <button
              onClick={() => {
                Router.push("/LogIn");
              }}
              className="text-[#0166FF] "
              href={"/LogIn"}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-[#0166FF] h-full w-full flex-1"></div>
    </div>
  );
};

export default SignUp;
