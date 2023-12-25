import React from "react";

import Check from "@/components/svg/Check";
import { useRouter } from "next/router";

const StepThree = () => {
  const router = useRouter();
  const routepusher = () => {
    router.push("/");
  };

  return (
    <div className=" w-96 h-80 bg-white flex flex-col justify-center items-center">
      <div className=" flex flex-col justify-center items-center mb-6">
        <div className="flex justify-center items-center w-12 h-12 bg-[#0166FF] mb-1 rounded-full">
          <Check />
        </div>
        <h1 className=" text-slate-900 text-2xl font-semibold">Good Job!</h1>
      </div>
      <div className=" mb-8">
        <p className=" text-slate-600 text-xs text-center">
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </p>
      </div>
      <div className="w-full">
        <button
          onClick={() => {
            routepusher();
          }}
          class="btn btn-info w-full rounded-3xl text-white bg-[#0166FF]"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default StepThree;
