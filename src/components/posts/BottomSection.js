import React from "react";
import Star from "../../static/star.svg";
import { Link } from "react-router-dom";

const BottomSection = () => {
  return (
    <div
      className="card w-6/12 h-full rounded-lg  flex justify-center items-center relative "
      style={{
        backgroundColor: "#fafafa",
        boxShadow: " 2px 2px 10px 1px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Link
        className="w-full h-full flex justify-center items-center"
        to={"/posts/top5"}
      >
        <div className="modal w-full h-full absolute  rounded-lg">
          <h3>Top 5</h3>
        </div>
        <img src={Star} alt="plus" className="w-20 h-20 object-cover   " />
      </Link>
    </div>
  );
};

export default BottomSection;
