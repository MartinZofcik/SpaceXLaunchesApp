import React, { ReactElement, useContext, Component } from "react";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import LaunchCard from "./components/LaunchCard";
import { Box } from "@mui/material";
import { Launch, LaunchesPastResult } from "../../types/types";
import { LaunchesPast } from "../../types/common/types-reactQuery";
// import { FavoritesContext } from "../context/FavoritesContext";

const HomeScreen: React.FC = (): ReactElement => {
  const { isLoading, error, data, isFetching } = useQuery<
    LaunchesPast,
    AxiosError
  >(["launchesPastData"], () =>
    axios
      .get("https://api.spacex.land/rest/launches-past?limit=10&offset=5")
      .then((res) => res.data)
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <Component>{error}</Component>;

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
        ? data.map((launch) => {
            return <LaunchCard key={launch?.id} launch={launch} />;
          })
        : null}
    </Box>
  );
};

export default HomeScreen;
