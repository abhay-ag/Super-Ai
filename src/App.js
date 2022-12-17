import React from "react";
import Chart from "./components/Chart";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="w-screen flex flex-row">
      <div className="flex-1">
        <Navbar />
        <Chart />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
