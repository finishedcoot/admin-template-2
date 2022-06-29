import React from "react";
import ChangeBilbord from "./ChangeBilbord";
import LineChart from "./LineChart";
import TopViewdList from "./TopViewdList";

const index = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 py-8 ">
      <div className="w-full h-1/2 flex items-center justify-center  px-2 py-4">
        <ChangeBilbord />
      </div>
      <div
        className="w-full h-1/2 flex items-center justify-between  px-2 py-2"
        style={{ backgroundColor: "#1b1c1c" }}
      >
        <LineChart />
        <TopViewdList />
      </div>
    </div>
  );
};

export default index;
