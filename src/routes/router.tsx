import { Box } from "@mui/material";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

const Router: React.FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default Router;
