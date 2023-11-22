import React from "react";

import Ellipse from "../svg/Ellipse";
import ArrowCircleUp from "../svg/ArrowCircleUp";

const Card = () => {
  return (
    <div className="card w-96 bg-base-100 ml-6">
      <div className="px-6 py-4 flex justify-center items-center">
        <Ellipse />
        <h1 className="ml-1 font-semibold text-black">Total Expences</h1>
      </div>
      <div className=" border-slate-200 border-solid border-t py-5 px-6">
        <div className="mb-4">
          <h1 className="font-semibold text-4xl">-1,200,000₮</h1>
          <p className=" text-lg text-slate-500">Your Income Amount</p>
        </div>
        <div className="flex">
          <ArrowCircleUp />
          <p className="text-lg ml-1">32% from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
