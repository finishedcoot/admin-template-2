import React from "react";
import Header from "./Header";

const Container = ({ title, children }) => {
  return (
    <div className="w-full h-full flex  justify-center items-center p-6 ">
      <div className="w-full h-full bg-gray-100 rounded-lg flex flex-col">
        <Header title={title} />
        {children}
      </div>
    </div>
  );
};

export default Container;
