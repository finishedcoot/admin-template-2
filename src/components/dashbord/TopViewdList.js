import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const topViewdList = [
  {
    id: 1,
    title: "Qishm",
    type: "Fashion",
    desc: "Stay tuned!",
    imageUrl:
      "https://works-galleries.s3.amazonaws.com/fashion/Qishm/qishm1.jpg",
  },
  {
    id: 2,
    title: "Khorasan",
    type: "Personal",
    desc: "Stay tuned!",
    imageUrl:
      "https://personal-galleries.s3.amazonaws.com/khorasan/khorasan3.jpg",
  },
  {
    id: 3,
    title: "Kan",
    type: "Fashion",
    desc: "Stay tuned!",
    imageUrl: "https://works-galleries.s3.amazonaws.com/fashion/Kan/kan1.jpg",
  },
  {
    id: 4,
    title: "Belle De Jour",
    type: "Advertisment",
    desc: "Stay tuned!",
    imageUrl:
      "https://works-galleries.s3.amazonaws.com/advertisment/Belle_de_jour/belle_de_jur1.jpg",
  },
];

const TopViewdList = () => {
  return (
    <div
      className="min-h-full  rounded-xl bg-zinc-100"
      style={{ width: "49%" }}
    >
      <div className="w-full flex justify-center items-center ">
        <h3 className="text-xl" style={{ color: "black", fontSize: 20 }}>
          Top Viewd
        </h3>
      </div>
      <List sx={{ width: "100%", bgcolor: "transparent" }}>
        {topViewdList.map((item) => {
          return (
            <>
              <ListItem key={item.title} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={item.imageUrl} />
                </ListItemAvatar>
                <ListItemText
                  sx={{ color: "black" }}
                  primary={item.title}
                  secondary={
                    <React.Fragment style={{ color: "white" }}>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="#black"
                      >
                        {item.type}
                      </Typography>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="#black"
                      >
                        — {item.desc} …
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          );
        })}
      </List>
    </div>
  );
};

export default TopViewdList;
