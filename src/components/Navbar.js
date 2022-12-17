import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

function Navbar() {
  return (
    <div className="py-8 px-4 flex flex-col space-y-3 items-start">
      <font className="border rounded px-2 py-1">
        Employee Movement Breakdown
      </font>

      <div className="flex flex-row space-x-8">
        <button className="border rounded px-2 py-1 flex flex-row space-x-2 items-center active:bg-gray-50">
          <BsCalendarDate />
          <font>2019</font>
        </button>
        <button className="border rounded px-2 py-1 flex flex-row space-x-2 items-center active:bg-gray-50">
          <AiOutlinePlus />
          <font>Add Filter</font>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
