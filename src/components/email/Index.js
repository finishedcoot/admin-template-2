import React, { useState } from "react";
import Header from "../shared/Header";
import Inbox from "./Inbox";
import Menu from "./Menu";
import TextEditor from "./TextEditor";

const Index = () => {
  const [section, setSection] = useState("inbox");
  const sectionHandler = (type) => {
    setSection(type);
  };
  return (
    <div className="flex">
      <Menu sectionHandler={sectionHandler} />
      {section === "inbox" && <Inbox />}
      {section === "newMassage" && <TextEditor />}
    </div>
  );
};

export default Index;
