import React from "react";
import ProjectCard from "./ProjectCard";
import Data from "../../../data/data";

const GridView = () => {
  return (
    <div className="w-full h-full flex flex-wrap justify-around items-center">
      {Data.map((proj) => {
        return (
          <ProjectCard
            projImage={proj.img[0] || proj.videocover[0]}
            projType={proj.type === "personal" ? "personal" : proj.subject}
            projTitle={proj.title}
          />
        );
      })}
    </div>
  );
};

export default GridView;
