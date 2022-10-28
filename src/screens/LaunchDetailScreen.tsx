import React from "react";
import { useSearchParams } from "react-router-dom";

const LaunchDetailScreen = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  console.log(id);

  return <div>LaunchDetailScreen</div>;
};

export default LaunchDetailScreen;
