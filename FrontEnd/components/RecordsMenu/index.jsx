import React from "react";
import { useState } from "react";

import Plus from "../svg/Plus";
import MenuCategory from "../MenuCategory";
import AddRecordModal from "../AddRecordModal";

const RecordsMenu = () => {
  const Categorys = [
    { name: "Food & Drinks" },
    { name: "Shopping" },
    { name: "Housing" },
    { name: "Transportation" },
    { name: "Vehicle" },
    { name: "Life & Entertainment" },
    { name: "Communication" },
    { name: "Financial expenses" },
    { name: "Investments" },
    { name: "Income" },
    { name: "Others" },
  ];
  const [open, setOpen] = useState(false);

  const closeForm = () => {
    console.log("Formee");
    setOpen(false);
  };
  return (
    <div className="px-4 py-6 bg-white flex flex-col w-[250px] border border-slid border-[#E5E7EB] rounded-[12px] ">
      <h1 className="font-semibold text-2xl mb-6">Records</h1>
      <button
        className="btn btn-primary rounded-full text-white mb-6"
        onClick={() => {
          setOpen(true);
        }}
      >
        <Plus color="white" />
        Add
      </button>
      {open && <AddRecordModal open={open} closeForm={closeForm} />}

      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-full max-w-xs mb-6"
      />
      {/* Types */}
      <div className="mb-6">
        <h1 className="font-semibold mb-4">Types</h1>
        <div className="flex flex-col justify-center items-start">
          <div className="mb-2 flex items-center">
            <input
              type="checkbox"
              checked="checked"
              className="checkbox rounded-full"
            />
            <span className="ml-2">All</span>
          </div>
          <div className="mb-2 flex items-center">
            <input
              type="checkbox"
              checked="checked"
              className="checkbox rounded-full"
            />
            <span className="ml-2">Income</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked="checked"
              className="checkbox rounded-full"
            />
            <span className="ml-2">Expence</span>
          </div>
        </div>
      </div>
      {/* Category */}
      <div className="">
        <div className="flex justify-between mb-5">
          <h1 className="font-semibold">Category</h1>
          <p className=" text-slate-400">Clear</p>
        </div>
        {Categorys.map((Category) => {
          return <MenuCategory Category={Category} />;
        })}
        <div className="flex items-center mb-2">
          <Plus color="#0166FF" />
          <button className="ml-2">Add Category</button>
        </div>
      </div>
      {/* Amount range */}
      <div>
        <div className="flex justify-between mb-4">
          <div>
            <input
              type="text"
              placeholder="0"
              className="input input-bordered w-[100px] p-4"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="1000"
              className="input input-bordered w-[100px] p-4"
            />
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="1000"
          value="500"
          class="range range-primary"
        />
        <div className="flex justify-between">
          <p>0</p>
          <p>1000</p>
        </div>
      </div>
    </div>
  );
};

export default RecordsMenu;
