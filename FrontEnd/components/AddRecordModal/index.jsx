import React from "react";

const AddRecordModal = () => {
  return (
    <dialog id="my_modal_3" className="modal w-[796px]">
      <div className="modal-box">
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
      </div>
    </dialog>
  );
};

export default AddRecordModal;
