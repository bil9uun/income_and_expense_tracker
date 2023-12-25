import React from "react";

import Coins from "@/components/svg/Coins";
import { StepContext } from "@/context/StepContext";
import { useContext } from "react";
import { useRouter } from "next/router";

const StepTwo = () => {
  const { changeStepData } = useContext(StepContext);
  const router = useRouter();
  const routepusher = () => {
    router.push("/StepThree");
  };

  return (
    <div className=" w-96 h-80 bg-white flex flex-col justify-center items-center">
      <div className=" flex flex-col justify-center items-center mb-6">
        <div className="flex justify-center items-center w-12 h-12 bg-[#0166FF] mb-1 rounded-full">
          <Coins />
        </div>
        <h1 className=" text-slate-900 text-2xl font-semibold">
          Set up your cash Balance
        </h1>
      </div>
      <div className="flex justify-center items-center w-full mb-3">
        <input
          name="balance"
          type="number"
          placeholder="Email"
          // value={stepData.balance}
          onChange={(e) => {
            changeStepData(e.target.name, e.target.value);
          }}
          class=" bg-[#F3F4F6] text-black input input-bordered input-md w-full"
        />
      </div>
      <div className=" mb-8">
        <p className=" text-slate-600 text-xs text-left">
          How much cash do you have in your wallet?
        </p>
      </div>
      <div className="w-full">
        <button
          onClick={() => {
            routepusher();
          }}
          class="btn btn-info w-full rounded-3xl text-white bg-[#0166FF]"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
