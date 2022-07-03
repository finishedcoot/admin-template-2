import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FolderIcon from "@mui/icons-material/Folder";
import EditIcon from "@mui/icons-material/Edit";
import Data from "../../../data/data";
import { Divider } from "@mui/material";

const ListView = () => {
  const projTypeHandler = (projTypee) => {
    const capitalaized = projTypee.charAt(0).toUpperCase() + projTypee.slice(1);
    if (capitalaized.includes("_")) {
      return capitalaized.replaceAll("_", " ");
    } else {
      return capitalaized;
    }
  };

  return (
    <div className="w-full h-full ">
      <List>
        {Data.map((proj) => {
          return (
            <>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <EditIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt={proj.title}
                    src={proj.img[0] || proj.videocover[0]}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    proj.title.includes("_")
                      ? proj.title.replaceAll("_", " ")
                      : proj.title
                  }
                  secondary={projTypeHandler(proj.type)}
                />
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    </div>
  );
};

export default ListView;
