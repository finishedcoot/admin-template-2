import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import List from "@mui/material/List";
import Fab from "@mui/material/Fab";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import InboxIcon from "@mui/icons-material/Inbox";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NavbarItem from "./NavbarItem";

const Items = [
  {
    text: "Dashbord",
    index: 1,
    icon: <GridViewIcon color="accent100" />,
    link: "/",
  },
  {
    text: "Posts",
    index: 2,
    icon: <BurstModeIcon color="accent100" />,
    link: "/posts",
  },
  {
    text: "Mails",
    index: 3,
    icon: <InboxIcon color="accent100" />,
    link: "/mails",
  },
  {
    text: "Calendar",
    index: 4,
    icon: <CalendarMonthIcon color="accent100" />,
    link: "/calendar",
  },
];

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setCollapsed(true);
    }
  }, []);
  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/mails":
        setSelectedIndex(2);
        break;
      case "/posts":
        setSelectedIndex(3);
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      case "/calendar":
        setSelectedIndex(4);
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      default:
        setSelectedIndex(1);
    }
  }, []);

  return (
    <div
      className={`w-${!collapsed ? 60 : 20} lg:w-${
        !collapsed ? 60 : 20
      } flex-initial bg-zinc-900 h-screen flex flex-col pr-3.5 pt-3.5 rounded-r-2xl transition-all`}
    >
      <Fab
        onClick={() => setCollapsed((prev) => !prev)}
        color="primary100"
        aria-label="add"
      >
        {collapsed ? <ListIcon /> : <CancelOutlinedIcon />}
      </Fab>
      <List component="nav" aria-label="main mailbox folders">
        {Items.map((item) => {
          return (
            <NavbarItem
              text={item.text}
              key={item.text}
              clickHandler={(event) => handleListItemClick(event, item.index)}
              selected={selectedIndex === item.index}
              collapsed={collapsed}
              link={item.link}
            >
              {item.icon}
            </NavbarItem>
          );
        })}
      </List>
    </div>
  );
};

export default Navbar;
