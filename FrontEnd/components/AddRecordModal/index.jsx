import React, { useState, useEffect, useContext } from "react";
import { TransactionContext } from "@/context/TransactionContext";

import RecordIcons from "./RecordIcons";
import instanceAxios from "@/utils/axios";

const AddRecordModal = ({ open, closeForm }) => {
  // const [open, setOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const { transactionData, changeTransactionData, addTransaction } =
    useContext(TransactionContext);

  const addRecord = async () => {
    await addTransaction();
    console.log("CLOSE");
    closeForm();

    console.log(transactionData.transaction_type, "type");
  };
  const getCategories = async () => {
    const {
      data: { categories },
    } = await instanceAxios.get("http://localhost:8008/categories");
    console.log("RES", categories);
    setCategory(categories);
  };

  useEffect(() => {
    console.log("CATEFF");
    getCategories();
  }, []);

  return (
    <dialog open={open} className="modal flex justify-center items-center ">
      <div className="modal-box max-w-5xl w-[800px]">
        <form method="dialog">
          <div className="flex">
            <h1 className=" text-xl font-semibold text-slate-900">
              Add Record
            </h1>
            <button
              onClick={closeForm}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </div>
        </form>
        <div className="flex">
          {/* Left */}
          <div className="w-[392px] py-5 px-6">
            <div className="bg-[#F3F4F6] flex rounded-full mb-5">
              <div className="flex-1 justify-center items-center p-0">
                <button
                  className={`btn w-full rounded-full text-white ${
                    transactionData.transaction_type === "EXP" &&
                    "bg-[#0166FF] text-white"
                  }`}
                  onClick={() => {
                    changeTransactionData("transaction_type", "EXP");
                  }}
                >
                  Expence
                </button>
              </div>
              <div className="flex-1">
                <button
                  className={`btn border-0 w-full rounded-full text-[#1F2937] ${
                    transactionData.transaction_type === "INC" &&
                    "bg-[#228822] text-white"
                  }`}
                  onClick={() => {
                    changeTransactionData("transaction_type", "INC");
                  }}
                >
                  Income
                </button>
              </div>
            </div>
            <div className="mb-[19px]">
              <h1 className="mb-[5px]">Amount</h1>
              <input
                type="number"
                placeholder="₮0"
                name="amount"
                value={transactionData.amount}
                onChange={(e) => {
                  console.log(e.target.name, e.target.value);
                  changeTransactionData(e.target.name, e.target.value);
                }}
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-[19px]">
              <h1>Category</h1>
              <div className="dropdown w-full">
                <label tabIndex={0} className="btn m-1 w-full">
                  Find or choose category
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full"
                >
                  <RecordIcons
                    changeTransactionData={changeTransactionData}
                    category={category}
                  />
                </ul>
              </div>
            </div>
            <div className="w-full mb-8">
              <h1>Date</h1>
              <input
                type="datetime-local"
                name="updated_at"
                className="input input-bordered  w-full"
                onChange={(e) => {
                  console.log("updated_at", e.target.value);
                  changeTransactionData(e.target.name, e.target.value);
                }}
              />
            </div>
            <button
              className={`btn border-0 w-full rounded-full text-white ${
                transactionData.transaction_type === "INC"
                  ? "bg-[#228822]"
                  : "bg-[#0166FF]"
              }`}
              onClick={addRecord}
            >
              Add Record
            </button>
          </div>
          {/* Right */}
          <div className=" w-[348px] py-5 px-6">
            <div className="mb-[19px]">
              <h1 className="mb-[5px]">Name</h1>
              <input
                type="text"
                name="transaction_name"
                placeholder="Write a name of transaction"
                value={transactionData.transaction_name}
                onChange={(e) => {
                  changeTransactionData(e.target.name, e.target.value);
                }}
              />
            </div>
            <div>
              <h1 className="mb-[5px]">Note</h1>
              <textarea
                className="textarea textarea-bordered w-[316px] h-[305px] p-4"
                placeholder="Write a Message"
                name="description"
                value={transactionData.description}
                onChange={(e) => {
                  changeTransactionData(e.target.name, e.target.value);
                }}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default AddRecordModal;
