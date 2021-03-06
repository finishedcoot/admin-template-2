import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Divider, IconButton } from "@mui/material";
import GridView from "./GridView";
import ListView from "./ListView";
import Container from "../../shared/Container";

const AllPosts = () => {
  const [age, setAge] = useState("");
  const [viewType, setViewType] = useState("grid");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const changeViewHandler = () => {
    viewType === "grid" ? setViewType("list") : setViewType("grid");
  };

  return (
    <Container title={"All Posts"}>
      <div className="w-full h-full flex justify-center items-center p-8 ">
        <div className="w-11/12 h-full bg-gray-100 rounded-lg flex flex-col p-8 pt-0">
          <div className="w-52 h-16 flex justify-start items-center">
            <span className="mr-2">Sort:</span>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">By</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="By"
                onChange={handleChange}
              >
                <MenuItem value={"new"}>Newest</MenuItem>
                <MenuItem value={"old"}>Oldest</MenuItem>
                <MenuItem value={"cat"}>Category</MenuItem>
              </Select>
            </FormControl>
            <IconButton aria-label="change view" onClick={changeViewHandler}>
              {viewType === "list" ? (
                <FormatListBulletedIcon />
              ) : (
                <DashboardIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <div className="w-full  pt-6  ">
            {viewType !== "grid" ? <GridView /> : <ListView />}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AllPosts;
