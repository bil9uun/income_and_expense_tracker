import React from "react";

import ArrowLeft from "../svg/ArrowLeft";
import ArrowRight from "../svg/ArrowRight";
import SoloRecord from "../SoloRecord";
import axios from "axios";

const RecordsContainer = () => {
  const [records, setRecords] = [];
  const TodayRecords = [
    {
      title: "Lending & Renting",
      time: "12:00",
      amount: "- 1000₮",
      color: "",
    },
    {
      title: "Food & Drinks",
      time: "12:00",
      amount: "- 1000₮",
      color: "",
    },
    {
      title: "Food & Drinks",
      time: "12:00",
      amount: "- 1000₮",
      color: "",
    },
    {
      title: "Food & Drinks",
      time: "12:00",
      amount: "- 1000₮",
      color: "",
    },
    {
      title: "Food & Drinks",
      time: "12:00",
      amount: "- 1000₮",
      color: "",
    },
  ];
  const getRecordData = async () => {
    const {
      data: { records },
    } = await axios.get("http://localhost:8008/transactions");
    console.log("records", records);
    setRecords(records);
  };
  console.log("records", records);
  return (
    <div className=" w-[846px]">
      {/* Deed 2 */}
      <div className="flex justify-between items-start mb-4 ">
        {/* Day Controller */}
        <div className="flex w-48 items-center justify-between">
          <button className="w-8 h-8 flex justify-center items-center bg-base-200 rounded-lg">
            <ArrowLeft />
          </button>
          <p className="mx-4">Last 30 Days</p>
          <button className="w-8 h-8 flex justify-center items-center bg-base-200 rounded-lg">
            <ArrowRight />
          </button>
        </div>
        {/* Input */}
        <div className=" w-[180px]">
          <select className="select select-bordered w-full max-w-xs">
            <option selected>Newest First</option>
            <option>Latest First</option>
            <option>Order By Money Desc</option>
          </select>
        </div>
      </div>
      {/* Dood Recorduud */}
      <div>
        {/* Select All */}
        <div className="py-3 px-6 bg-white flex items-center justify-between rounded-xl mb-3 border border-solid border-[#E5E7EB]">
          <div className="flex jus items-center">
            <input
              type="checkbox"
              checked="checked"
              className="checkbox checkbox-primary mr-4"
            />
            <h1>Select All</h1>
          </div>

          <h1 className="text-slate-400 font-semibold">-35500₮</h1>
        </div>
        {/* Today */}
        <div className="mb-6">
          <h1 className="font-semibold mb-3">Today</h1>
          {TodayRecords.map((TodayRecord) => (
            <SoloRecord Record={TodayRecord} />
          ))}
        </div>
        {/* Yesterday */}
        <div className="mb-6">
          <h1 className="font-semibold mb-3">Yesterday</h1>
          {TodayRecords.map((TodayRecord) => (
            <SoloRecord Record={TodayRecord} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecordsContainer;
