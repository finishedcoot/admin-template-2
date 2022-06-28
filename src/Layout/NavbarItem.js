import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const NavbarItem = ({
  children,
  text,
  clickHandler,
  selected,
  collapsed,
  link,
}) => {
  return (
    <Link to={link}>
      <ListItemButton
        className="listItem"
        selected={selected}
        onClick={clickHandler}
        style={{ height: 32 }}
      >
        <ListItemIcon>{children}</ListItemIcon>
        {!collapsed && (
          <ListItemText primary={text} classes={{ primary: "text" }} />
        )}
      </ListItemButton>
    </Link>
  );
};

export default NavbarItem;
