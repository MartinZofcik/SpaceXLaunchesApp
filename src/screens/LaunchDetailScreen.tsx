import { IconButton } from "@mui/material";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "urql";
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

  const LaunchByIdQuery = `
    query ($id: ID!){
      launch(id: $id) {
        mission_id
        mission_name
        launch_site {
          site_name
          site_name_long
        }
      }
    }
  `;
  const [result] = useQuery({
    query: LaunchByIdQuery,
    variables: {
      id,
    },
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <>
      <Header />
      Mission ID: <b>{data.launch.mission_id}</b>
      <br />
      Mission Name: <b>{data.launch.mission_name}</b>
      <br />
      Launch Site Name: <b>{data.launch.launch_site.site_name}</b>
      <br />
      Launch Site long Name: <b>{data.launch.launch_site.site_name_long}</b>
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
