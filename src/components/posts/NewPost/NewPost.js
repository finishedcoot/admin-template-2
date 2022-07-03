import React from "react";
import Container from "../../shared/Container";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Button, TextField } from "@mui/material";

const NewPost = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container title={"New Post"}>
      <form className="w-full h-full relative">
        <div className="w-full h-full  flex">
          <div className="w-1/3 h-full flex flex-col ">
            <div className="w-96  p-10 ml-8 ">
              <div className="w-11/12 h-60 flex justify-center items-center border-2  rounded-xl border-zinc-700">
                <PhotoSizeSelectActualIcon />
              </div>
              <label
                for="media"
                className="border-zinc-700 border-2  rounded-xl"
                style={{
                  display: "block",
                  marginTop: 20,
                  width: 100,
                  textAlign: "center",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              >
                Add Media
              </label>
              <input
                type="file"
                id="media"
                name="media"
                accept="image/png, image/jpeg"
                style={{ display: "none" }}
              />
            </div>
            <div className="w-96  p-10 ml-8 ">
              <h1 className="mb-8 text-lg font-semibold">Organising</h1>
              <div className="flex justify-between">
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Kind
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="work"
                      control={<Radio />}
                      label="Work"
                    />
                    <FormControlLabel
                      value="personal"
                      control={<Radio />}
                      label="Personal"
                    />
                  </RadioGroup>
                </FormControl>
                <FormControl style={{ minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-label">
                    Categorie
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Categorie"
                    onChange={handleChange}
                  >
                    <MenuItem value={"fashion"}>Fashion</MenuItem>
                    <MenuItem value={"commercial"}>Commercial</MenuItem>
                    <MenuItem value={"interior_and_buildings"}>
                      Interior & Exterior
                    </MenuItem>
                    <MenuItem value={"real_estate"}>Real Estate</MenuItem>
                    <MenuItem value={"wedding"}>Wedding</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="w-2/3 h-full flex flex-col  p-10">
            <TextField
              id="standard-basic"
              label="Title"
              variant="standard"
              style={{
                marginBottom: 60,
              }}
            />
            <div className="flex justify-around">
              <TextField
                id="outlined-multiline-static"
                label="Left Side Description"
                multiline
                rows={6}
                defaultValue="Default Value"
                className="w-1/3"
              />
              <TextField
                id="outlined-multiline-static"
                label="Right Side Description"
                multiline
                rows={6}
                defaultValue="Default Value"
                className="w-1/3"
              />
            </div>
          </div>
        </div>
        <div
          className="w-96 flex justify-around"
          style={{
            position: "absolute",
            bottom: 50,
            right: 0,
          }}
        >
          <Button variant="contained" color="success">
            Add
          </Button>
          <Button variant="outlined" color="error">
            Cancel
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default NewPost;

/**..Adding New Post       Add/Cancel
 * Information:
 *        Title:
 *        Description:
 * Media:[]
 *
 * Organising:
 *    Kind:
 *      Work:    , Personal:
 *           Fashion
 *           Commercial
 *           Advertising
 *           Interior & Exterior
 *           Real Estate
 *           Wedding
 *
 *
 *
 */
