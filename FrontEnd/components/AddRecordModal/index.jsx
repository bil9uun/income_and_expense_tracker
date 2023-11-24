import React from "react";

import PlusCircle from "../svg/PlusCircle";
import House from "../svg/House";
import Gift from "../svg/Gift";
import Food from "../svg/Food";
import Wine from "../svg/Wine";
import Taxi from "../svg/Taxi";
import TShirt from "../svg/TShirt";
import AddCategoryModal from "../AddCategoryModal";

const AddRecordModal = () => {
  const AddCategorys = [{ iconSVG: "H", text: "House" }];
  return (
    <dialog id="my_modal" className="modal flex justify-center items-center ">
      <div className="modal-box max-w-5xl w-[800px]">
        <form method="dialog">
          <div className="flex">
            <h1 className=" text-xl font-semibold text-slate-900">
              Add Record
            </h1>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </div>
        </form>
        <div className="flex">
          {/* Left */}
          <div className="w-[392px] py-5 px-6">
            <div className="bg-[#F3F4F6] flex rounded-full mb-5">
              <div className="flex-1 justify-center items-center p-0">
                <button className="btn btn-primary w-full rounded-full text-white">
                  Expence
                </button>
              </div>
              <div className="flex-1">
                <button className="btn border-0 bg-[#F3F4F6] w-full rounded-full text-[#1F2937]">
                  Income
                </button>
              </div>
            </div>
            <div className="mb-[19px]">
              <h1 className="mb-[5px]">Amount</h1>
              <input
                type="text"
                placeholder="₮000.00"
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
                  <li>
                    <div
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                      className="border-b border-solid border[rgba(0, 0, 0, 0.10)]"
                    >
                      <PlusCircle />
                      <AddCategoryModal />
                      <h1 className="ml-3">Add Category</h1>
                    </div>
                  </li>
                  <li>
                    <div>
                      <House color="#0166FF" />
                      <h1 className="ml-3">House</h1>
                    </div>
                  </li>
                  <li>
                    <div>
                      <Gift />
                      <h1 className="ml-3">Gift</h1>
                    </div>
                  </li>
                  <li>
                    <div>
                      <Food />
                      <h1 className="ml-3">Food</h1>
                    </div>
                  </li>
                  <li>
                    <div>
                      <Wine />
                      <h1 className="ml-3">Drink</h1>
                    </div>
                  </li>
                  <li>
                    <div>
                      <Taxi />
                      <h1 className="ml-3">Taxi</h1>
                    </div>
                  </li>
                  <li>
                    <div>
                      <TShirt />
                      <h1 className="ml-3">Shopping</h1>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex mb-8">
              <div className="mr-3">
                <h1>Date</h1>
                <input type="date" className="input input-bordered" />
              </div>
              <div>
                <h1>Date</h1>
              </div>
            </div>
            <button className="btn border-0 bg-primary w-full rounded-full text-white">
              Add Record
            </button>
          </div>
          {/* Right */}
          <div className=" w-[348px] py-5 px-6">
            <div className="mb-[19px]">
              <h1 className="mb-[5px]">Payee</h1>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Payee
                </option>
              </select>
            </div>
            <div>
              <h1 className="mb-[5px]">Note</h1>
              <textarea
                className="textarea textarea-bordered w-[316px] h-[305px] p-4"
                placeholder="Write Here"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default AddRecordModal;
