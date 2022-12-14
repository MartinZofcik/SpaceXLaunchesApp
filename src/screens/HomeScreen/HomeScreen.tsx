import React, { ReactElement, useContext } from "react";

import { useQuery } from "urql";
import LaunchCard from "./components/LaunchCard";
import { Box } from "@mui/material";
import { Launch, LaunchesPastResult } from "../../types/types";
// import { FavoritesContext } from "../context/FavoritesContext";

export interface CardData {
  mission_name: string;
  launch_site: {
    site_name: string;
    site_name_long: string;
  };
  links: {
    article_link: string;
    flickr_images: string[];
  };
  launch_date_utc: string;
  id: string;
  mission_id: string;
}

const LaunchesPastQuery = `
  query {
    launchesPast(limit: 12) {
      mission_name
      launch_site {
        site_name
        site_name_long
      }
      links {
        article_link
        flickr_images
      }
      launch_date_utc
      id
    }
  }
`;

const HomeScreen: React.FC = (): ReactElement => {
  const [result] = useQuery({
    query: LaunchesPastQuery,
  });
  const { data, fetching, error } = result;

  // const favoritesContext = useContext(FavoritesContext);

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  console.log(data);

  return (
    <Box
      sx={{
        display: "grid",
        width: "100%",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "2% 2%",
        ["@media (max-width:1000px)"]: {
          gridTemplateColumns: "1fr 1fr",
        },
      }}
    >
      {data
        ? data?.launchesPast?.map((launch) => {
            return <LaunchCard key={launch.id} launch={launch} />;
          })
        : null}
    </Box>
  );
};

export default HomeScreen;
