import React from "react";

const Header = ({ title }) => {
  return (
    <div
      className="w-full   flex justify-start items-center bg-zinc-900 pl-5"
      style={{
        minHeight: "90px",
      }}
    >
      <h2 className="text-white text-3xl font-semibold tracking-wide  ">
        {title}
      </h2>
    </div>
  );
};

export default Header;
