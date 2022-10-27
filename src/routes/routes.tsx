import { ReactElement } from "react";
import { Route, Routes as BaseRoutes } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import LaunchDetailScreen from "../screens/LaunchDetailScreen";
import { ApplicationLocations } from "../types/common/applications-locations.dto";

const Routes: React.FC = (): ReactElement => {
  return (
    <BaseRoutes>
      <Route path={ApplicationLocations.HOME} element={<HomeScreen />} />
      <Route
        path={ApplicationLocations.LAUNCH_DETAIL}
        element={<LaunchDetailScreen />}
      />
    </BaseRoutes>
  );
};

export default Routes;
