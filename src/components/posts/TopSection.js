import React from "react";
import "./styles.css";
import Plus from "../../static/plus.svg";
import AllPosts from "../../static/all_posts.png";
import { Link } from "react-router-dom";

const TopSection = () => {
  return (
    <div className="w-full h-full flex justify-between">
      <div
        className="card w-8/12 h-full relative bg-slate-500 rounded-lg overflow-hidden"
        style={{
          backgroundColor: "#fafafa",
          boxShadow: " 2px 2px 10px 1px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Link
          className="w-full h-full flex justify-center items-center"
          to={"/posts/all"}
        >
          <div className="modal w-full h-full absolute  rounded-lg">
            <h3>All Posts</h3>
          </div>
          <img
            src={AllPosts}
            alt="something"
            className="w-full h-full object-cover   "
          />
        </Link>
      </div>

      <div
        className="card w-4/12 h-full  ml-8 rounded-lg  flex justify-center items-center relative "
        style={{
          backgroundColor: "#fafafa",
          boxShadow: " 2px 2px 10px 1px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Link
          className=" w-full h-full flex justify-center items-center"
          to={"/posts/add"}
        >
          <div className="modal w-full h-full absolute  rounded-lg">
            <h3>Add New</h3>
          </div>
          <img src={Plus} alt="plus" className="w-20 h-20 object-cover   " />
        </Link>
      </div>
    </div>
  );
};

export default TopSection;
