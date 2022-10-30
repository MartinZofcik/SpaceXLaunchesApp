import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { ApplicationLocations } from "../../types/common/applications-locations.dto";

const Header = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "end" }}>
      <Link to={ApplicationLocations.HOME}>Home</Link>
    </Box>
  );
};

export default Header;
