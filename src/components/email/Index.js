import React, { useState } from "react";
import Inbox from "./Inbox";
import Menu from "./Menu";
import TextEditor from "./TextEditor";

const Index = () => {
  const [section, setSection] = useState("inbox");
  const sectionHandler = (type) => {
    setSection(type);
  };
  return (
    <div className="w-11/12 h-full bg-gray-100 rounded-lg flex">
      <Menu sectionHandler={sectionHandler} />
      {section === "inbox" && <Inbox />}
      {section === "newMassage" && <TextEditor />}
      {/* <Inbox /> */}
      {/* <TextEditor /> */}
    </div>
  );
};

export default Index;
