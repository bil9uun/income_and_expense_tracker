import React from "react";

import { getIcons, thousandify } from "@/utils";

const LastRecord1 = ({ LastRecord }) => {
  return (
    <div className="py-5 flex items-center justify-between border-t border-solid border-[#E5E7EB]">
      <div className="flex items-center">
        <div className="relative flex justify-center items-center">
          <div className="absolute z-10 px-5">
            {getIcons(LastRecord.ct_name)}
          </div>
        </div>
        <div className="flex flex-col ml-4">
          <h1>{LastRecord.name}</h1>
          <p className=" text-xs text-[#6B7280]">{LastRecord.updated_at}</p>
        </div>
      </div>

      <h1
        className={`${
          LastRecord.transaction_type === "INC"
            ? "text-green-500"
            : "text-red-500"
        } font-semibold`}
      >
        {LastRecord.transaction_type === "EXP" && "-"}
        {LastRecord.transaction_type === "INC" && "+"}
        {thousandify(LastRecord.amount)}₮
      </h1>
    </div>
  );
};

export default LastRecord1;
