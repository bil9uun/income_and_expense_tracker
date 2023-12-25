import React from "react";
import { getIcons } from "@/utils";

const RecordIcons = ({ category, changeTransactionData }) => {
  console.log(category, "cates");
  return (
    <div>
      {category.map((el) => (
        <button
          className="w-full font-normal mb-4 flex items-center gap-3 hover:opacity-50"
          onClick={(e) => {
            console.log(el.id);
            changeTransactionData("categoryId", el.id);
          }}
        >
          {getIcons(el.name, el.category_color)}
          {el.name}
        </button>
      ))}
    </div>
  );
};

export default RecordIcons;
