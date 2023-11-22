import React from "react";

import Home from "../svg/Home";
import Ellipse123 from "../svg/Ellipse123";

const SoloRecord = ({ Record }) => {
  return (
    <div className="py-3 px-6 bg-white flex items-center justify-between rounded-xl mb-3 border border-solid border-[#E5E7EB]">
      <div className="flex jus items-center">
        <input
          type="checkbox"
          checked="checked"
          className="checkbox checkbox-primary mr-4"
        />
        <div className="relative flex justify-center items-center">
          <Ellipse123 />
          <div className="absolute z-10">
            <Home />
          </div>
        </div>
        <div className="flex flex-col ml-4">
          <h1>{Record.title}</h1>
          <p className=" text-xs text-[#6B7280]">{Record.time}</p>
        </div>
      </div>

      <h1 className="text-[#84CC16] font-semibold">{Record.amount}</h1>
    </div>
  );
};

export default SoloRecord;
