import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const mails = [
  {
    id: 1,
    from: "Ali",
    subject: "Booming business",
    date: "6/29/2022",
  },
  {
    id: 2,
    from: "Reach Client",
    subject: "Let's burn some money",
    date: "6/20/2022",
  },
  {
    id: 3,
    from: "EggHead",
    subject: "whassup ghandeasal",
    date: "6/12/2022",
  },
  {
    id: 4,
    from: "Egghead friend",
    subject: "contact egghead as soon as possible",
    date: "6/08/2022",
  },
  {
    id: 5,
    from: "Ali friend",
    subject: "More Booming business",
    date: "6/02/2022",
  },
];

const Inbox = () => {
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <div className="w-10/12 h-full pt-20">
      <List sx={{ width: "95%", bgcolor: "background.paper" }}>
        {mails.map((mail) => {
          const labelId = `checkbox-list-label-${mail.id}`;

          return (
            <ListItem
              key={mail.id}
              secondaryAction={
                <>
                  <span style={{ fontSize: 12 }}>{mail.date}</span>

                  <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                  </IconButton>
                </>
              }
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    onClick={handleToggle(mail.id)}
                    checked={checked.indexOf(mail.id) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                  <Checkbox
                    inputProps={{ "aria-labelledby": labelId }}
                    icon={<StarBorderIcon />}
                    checkedIcon={<StarIcon />}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={mail.from}
                  secondary={mail.subject}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default Inbox;
