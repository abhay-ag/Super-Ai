import React from "react";

function Sidebar() {
  return (
    <div className="w-80 shadow-xl shadow-[rgba(0,0,0,0.3)] h-screen absolute right-0 top-0 flex flex-col bg-gray-100">
      <div className="px-1 flex flex-col space-y-4 py-4">
        <font className="font-bold mx-3 text-lg">Net Change</font>
        <div className="bg-white">
          <div className="border px-3 text-sm font-semibold py-2 hover:text-blue-400 flex flex-row justify-between transition-colors">
            <font>Headcount</font>
            <font>+379</font>
          </div>
          <div className="border px-3 font-semibold text-sm py-2 hover:text-blue-400 flex flex-row justify-between transition-colors">
            <font>Starting Headcount</font>
            <font>4.85k</font>
          </div>
          <div className="border px-3 font-semibold text-sm py-2 hover:text-blue-400 flex flex-row justify-between transition-colors">
            <font>Ending Headcount</font>
            <font>5.23k</font>
          </div>
          <div className="border px-3 font-semibold text-sm py-2 hover:text-blue-400 flex flex-row justify-between transition-colors">
            <font>Net in</font>
            <font>720</font>
          </div>
          <div className="border px-3 font-semibold text-sm py-2 hover:text-blue-400 flex flex-row justify-between transition-colors">
            <font>Net out</font>
            <font>348</font>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-1 space-y-2">
        <font className="font-medium border-b py-1 mx-3 text-base">Legend</font>
        <font className = "font-bold text-xs mx-3 text-gray-600">
            Movement Summary
        </font>

        <div className="bg-white">
          <div className="border px-3 text-sm font-semibold py-2 space-x-4 flex flex-row items-center">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <font className = "text-green-400">Scans</font>
          </div>
          <div className="border px-3 text-sm font-semibold py-2 space-x-4 flex flex-row items-center">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <font className = "text-red-400">Exits</font>
          </div>
          <div className="border px-3 text-sm font-semibold py-2 space-x-4 flex flex-row items-center">
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <font className = "text-gray-400">Occupancies</font>
          </div>
          <div className="border px-3 text-sm font-semibold py-2 space-x-4 flex flex-row items-center">
            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
            <font className = "text-teal-400">Exchange</font>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Sidebar;
