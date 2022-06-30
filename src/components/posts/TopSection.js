import React from "react";

const TopSection = () => {
  return (
    <div className="w-full h-full flex justify-between">
      <div
        className="w-8/12 h-full relative bg-slate-500 rounded-lg"
        style={{
          backgroundColor: "#fafafa",
          boxShadow: " 2px 2px 10px 1px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="modal w-full h-full absolute"></div>
        <img src="" alt="something" />
      </div>
      <div className="w-4/12 h-full  pl-4">
        <h1
          className="w-full h-full rounded-lg  flex justify-center items-center"
          style={{
            background: "rgb(0, 0, 0)",
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.5553571770505077) 0%, rgba(240,240,240,0.16600143475358897) 52%, rgba(250,250,250,1) 100%)",
            boxShadow: " 2px 2px 10px 1px rgba(0, 0, 0, 0.2)",
          }}
        >
          Add...
        </h1>
      </div>
    </div>
  );
};

export default TopSection;
