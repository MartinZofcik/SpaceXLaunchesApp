import { IconButton } from "@mui/material";
import React from "react";
import axios from "axios";

import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Launch } from "../types/types";
import Header from "./components/Header";
import {
  FavoriteContext,
  FavoritesContextType,
} from "./context/FavoritesContext";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import Star from "@mui/icons-material/Star";

const LaunchDetailScreen = () => {
  const { favorites, addToFavorites, removeFromFavorites } = React.useContext(
    FavoriteContext
  ) as FavoritesContextType;

  const [searchParams] = useSearchParams();
  const id = String(searchParams.get("id"));

  const { isLoading, error, data, isFetching } = useQuery(
    ["launchDetail"],
    () =>
      axios
        .get(`https://api.spacex.land/rest/launch/${id}`)
        .then((res) => res.data)
  );

  if (isFetching) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  return (
    <>
      <Header />
      Mission ID: <b>{data.mission_id}</b>
      <br />
      Mission Name: <b>{data.mission_name}</b>
      <br />
      Launch Site Name: <b>{data.launch_site?.site_name}</b>
      <br />
      Launch Site long Name: <b>{data.launch_site?.site_name_long}</b>
      <br />
      Details: {data.details}
      <br />
      {favorites.includes(id) ? (
        <IconButton onClick={() => removeFromFavorites(id)}>
          <Star sx={{ color: "yellow" }} />
        </IconButton>
      ) : (
        <IconButton onClick={() => addToFavorites(id)}>
          <StarBorderOutlinedIcon />
        </IconButton>
      )}
    </>
  );
};

export default LaunchDetailScreen;
