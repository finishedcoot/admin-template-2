import React from "react";
import ChangeBilbord from "./ChangeBilbord";
import LineChart from "./LineChart";
import TopViewdList from "./TopViewdList";

const index = () => {
  return (
    <div className="container flex-col">
      <ChangeBilbord />
      <div className="container flex">
        <LineChart />
        <TopViewdList />
      </div>
    </div>
  );
};

export default index;
