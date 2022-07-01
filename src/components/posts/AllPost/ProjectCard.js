import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";

const ProjectCard = ({ projImage, projType, projTitle }) => {
  const projTypeHandler = (projTypee) => {
    const capitalaized = projTypee.charAt(0).toUpperCase() + projTypee.slice(1);
    if (capitalaized.includes("_")) {
      return capitalaized.replaceAll("_", " ");
    } else {
      return capitalaized;
    }
  };

  return (
    <div className="w-72 h-96 m-2">
      <Card className="w-full h-full ">
        <CardMedia
          component="img"
          height="200"
          image={projImage}
          alt="green iguana"
          style={{ height: 200 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {projTitle.includes("_")
              ? projTitle.replaceAll("_", " ")
              : projTitle}
            <span className="ml-2">
              <Chip
                size={"small"}
                sx={{ fontSize: 10 }}
                label={projTypeHandler(projType)}
                variant="outlined"
              />
            </span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description
          </Typography>
        </CardContent>
        <CardActions className="mt-6">
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProjectCard;
