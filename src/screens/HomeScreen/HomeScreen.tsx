import React, { ReactElement, useEffect } from "react";

import { useQuery } from "urql";
import LaunchCard from "./components/LaunchCard";
import { Box } from "@mui/material";

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
[];

const LaunchesPastQuery = `
  query {
    launchesPast(limit: 10) {
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
      mission_id
    }
  }
`;

const HomeScreen: React.FC = (): ReactElement => {
  const [result] = useQuery<CardData[]>({
    query: LaunchesPastQuery,
  });
  const { data, fetching, error } = result;

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
      }}
    >
      {data
        ? data.launchesPast.map((launch) => {
            return <LaunchCard key={launch.mission_name} launch={launch} />;
          })
        : null}
    </Box>
  );
};

export default HomeScreen;
