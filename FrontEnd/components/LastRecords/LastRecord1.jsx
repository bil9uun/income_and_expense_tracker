import React from "react";

import Home from "../svg/Home";
import Ellipse123 from "../svg/Ellipse123";

const LastRecord1 = ({ LastRecord }) => {
  return (
    <div className="py-5 flex items-center justify-between border-t border-solid border-[#E5E7EB]">
      <div className="flex items-center">
        <div className="relative flex justify-center items-center">
          <Ellipse123 />
          <div className="absolute z-10">
            <Home />
          </div>
        </div>
        <div className="flex flex-col ml-4">
          <h1>{LastRecord.title}</h1>
          <p className=" text-xs text-[#6B7280]">{LastRecord.time}</p>
        </div>
      </div>

      <h1 className="text-[#84CC16] font-semibold">{LastRecord.amount}</h1>
    </div>
  );
};

export default LastRecord1;
