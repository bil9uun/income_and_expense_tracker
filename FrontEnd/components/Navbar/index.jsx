import React from "react";
import { useRouter } from "next/router";

import Logo from "../svg/Logo";
import Plus from "../svg/Plus";

const Navbar = () => {
  const Router = useRouter();
  return (
    <div className="navbar bg-white px-[120px]">
      <div className="flex-1 text-black">
        <Logo color="#0166ff" />
        <button
          className="mx-6"
          onClick={() => {
            Router.push("/");
          }}
        >
          Dashboard
        </button>
        <button
          onClick={() => {
            Router.push("/Records");
          }}
          href={"/LogIn"}
        >
          Records
        </button>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <button className="btn btn-primary rounded-full text-white">
            <Plus color="white" />
            Record
          </button>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="/img/Placeholder.png"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
