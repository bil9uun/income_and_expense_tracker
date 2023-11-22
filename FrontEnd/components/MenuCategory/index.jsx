import React from "react";

import Leading from "../svg/Leading";
import Arrow from "../svg/Arrow";

const MenuCategory = ({ Category }) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex">
        <Leading />
        <p className="ml-2 ">{Category.name}</p>
      </div>
      <Arrow />
    </div>
  );
};

export default MenuCategory;
