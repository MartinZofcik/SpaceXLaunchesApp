import React, { ReactElement } from "react";
import { CardData } from "../HomeScreen";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

interface IProps {
  launch: CardData;
}

const LaunchCard = ({ launch }: IProps): ReactElement => {
  return (
    <Card sx={{ width: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={launch.links?.flickr_images[0]}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {launch.mission_name}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {launch.mission_id}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {launch.launch_date_utc}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {launch.launch_site.site_name_long}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default LaunchCard;
