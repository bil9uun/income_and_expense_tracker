import React from "react";

import Money from "@/components/svg/Money";
import StepTwo from "../StepTwo";

const StepOne = () => {
  return (
    <div className=" w-96 h-80 bg-white flex flex-col justify-center items-center">
      <div className=" flex flex-col justify-center items-center mb-6">
        <div className="flex justify-center items-center w-12 h-12 bg-[#0166FF] mb-1 rounded-full">
          <Money />
        </div>
        <h1 className=" text-slate-900 text-2xl font-semibold">
          Select base currency
        </h1>
      </div>
      <div className="flex justify-center items-center w-full mb-3">
        <select className="select select-bordered w-full bg-[#F3F4F6] border-[#D1D5DB] text-black font-semibold">
          <option selected>MNT - Mongolian Tugrik</option>
          <option>USD - United States Dollar</option>
          <option>RUB - Russian Ruble</option>
          <option>CNY - Chinese Yuan</option>
          <option>AUD - Australian Dollar</option>
          <option>KRW - South Korean Won</option>
          <option>JPY - Japanese yen</option>
        </select>
      </div>
      <div className="mb-8">
        <p className=" text-slate-600 text-xs text-center">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one
        </p>
      </div>
      <div className="w-full">
        <button
          onClick={() => {
            switcher();
          }}
          class="btn btn-info w-full rounded-3xl text-white bg-[#0166FF]"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default StepOne;
