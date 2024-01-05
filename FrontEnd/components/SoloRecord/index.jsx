import React, { useState } from "react";

import Home from "../svg/Home";
import Ellipse123 from "../svg/Ellipse123";
import { getIcons, thousandify, dayformat } from "@/utils";

const SoloRecord = ({ transaction }) => {
  const [isChecked, setIsChecked] = useState("");
  const [checkedAmount, setCheckedAmount] = useState(0);

  const toggleCheckbox = (a, b) => {
    console.log("event", a, b);
    if (isChecked === "") {
      setIsChecked("checked");
    }
    if (isChecked === "checked") {
      setIsChecked("");
    }
  };
  return (
    <div
      onClick={() => {
        toggleCheckbox(transaction.amount, transaction.transaction_type);
      }}
      className="py-3 px-6 bg-white flex items-center justify-between rounded-xl mb-3 border border-solid border-[#E5E7EB]"
    >
      <div className="flex jus items-center">
        <input
          type="checkbox"
          checked={isChecked}
          className="checkbox checkbox-primary mr-4"
        />
        <div className="relative flex justify-center items-center">
          <div className="absolute z-10">{getIcons(transaction.ct_name)}</div>
        </div>
        <div className="flex flex-col ml-4">
          <h1>{transaction.name}</h1>
          <p className=" text-xs text-[#6B7280]">
            {dayformat(transaction.updated_at)}
          </p>
        </div>
      </div>

      <h1
        className={`${
          transaction.transaction_type === "INC"
            ? "text-green-500"
            : "text-red-500"
        } font-semibold`}
      >
        {transaction.transaction_type === "EXP" && "-"}
        {transaction.transaction_type === "INC" && "+"}
        {thousandify(transaction.amount)}₮
      </h1>
    </div>
  );
};

export default SoloRecord;
