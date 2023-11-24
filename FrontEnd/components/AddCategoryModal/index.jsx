import React from "react";

import House from "../svg/House";
import Arrow from "../svg/Arrow";

const AddCategoryModal = () => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <div className="flex">
            <h1 className=" text-xl font-semibold text-slate-900">
              Add Record
            </h1>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </div>
        </form>
        <div className="flex">
          <div className="dropdown w-full">
            <label tabIndex={0} className="btn m-1">
              <div>
                <House color="black" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box "
            >
              <li>HII</li>
            </ul>
          </div>
          <input type="text" className="input input-bordered" />
        </div>
      </div>
    </dialog>
  );
};

export default AddCategoryModal;
