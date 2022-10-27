import React, { ReactElement, useEffect } from "react";

import { useQuery } from "urql";

export interface CardData {
  launchesPast: [
    {
      mission_name: string;
      launch_date_local: string;
    }
  ];
}

const TodosQuery = `
  query {
    launchesPast(limit: 10) {
     mission_name
     launch_date_local
    }
  }
`;

const HomeScreen: React.FC = (): ReactElement => {
  const [result] = useQuery<CardData>({
    query: TodosQuery,
  });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      {data?.launchesPast?.map((launch) => {
        return <div key={launch.mission_name}>{launch.mission_name}</div>;
      })}
    </div>
  );
};

export default HomeScreen;
