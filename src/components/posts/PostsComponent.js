import React from "react";
import BottomSection from "./BottomSection";
import TopSection from "./TopSection";

const PostsComponent = () => {
  return (
    <>
      <div className="w-full h-1/2  px-4 pt-4 ">
        <TopSection />
      </div>
      <div className="w-full h-1/2 flex justify-start items-center p-4 ">
        <BottomSection />
      </div>
    </>
  );
};

export default PostsComponent;
