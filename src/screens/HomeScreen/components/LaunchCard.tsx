import React, { ReactElement, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Icon,
  IconButton,
} from "@mui/material";
import { ApplicationLocations } from "../../../types/common/applications-locations.dto";
import { Link } from "react-router-dom";
import { Launch } from "../../../types/types";
import { CardData } from "../HomeScreen";

import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import Star from "@mui/icons-material/Star";
import {
  FavoriteContext,
  FavoritesContextType,
} from "../../context/FavoritesContext";

interface IProps {
  launch: CardData;
  // favoriteLaunch: boolean | undefined;
}

const LaunchCard = ({ launch }: IProps): ReactElement => {
  const { favorites, addToFavorites, removeFromFavorites } = React.useContext(
    FavoriteContext
  ) as FavoritesContextType;

  return (
    <Card sx={{ width: "100%", height: "400px" }}>
      {launch.links?.flickr_images.length > 0 ? (
        <CardMedia
          component="img"
          height="200"
          image={launch.links?.flickr_images[0]}
        />
      ) : (
        <Box sx={{ height: "200px", backgroundColor: "lightgrey" }} />
      )}

      <CardContent>
        <Link
          to={ApplicationLocations.LAUNCH_DETAIL + "?id=" + launch.id}
          style={{ textDecoration: "none" }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {launch.mission_name}
          </Typography>
        </Link>
        <Typography variant="subtitle2" color="text.secondary">
          {launch.launch_date_utc}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {launch.launch_site?.site_name}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <IconButton> */}
        {favorites.includes(launch.id) ? (
          <IconButton onClick={() => removeFromFavorites(launch.id)}>
            <Star sx={{ color: "yellow" }} />
          </IconButton>
        ) : (
          <IconButton onClick={() => addToFavorites(launch.id)}>
            <StarBorderOutlinedIcon />
          </IconButton>
        )}
        {/* </IconButton> */}
      </CardActions>
    </Card>
  );
};

export default LaunchCard;
