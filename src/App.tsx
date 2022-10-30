import react, { useState } from "react";
import { createClient, Provider } from "urql";
import Router from "./routes/router";
import FavoriteProvider from "./screens/context/FavoritesContext";

const client = createClient({
  url: "https://api.spacex.land/graphql/",
});

function App() {
  return (
    <Provider value={client}>
      <FavoriteProvider>
        <Router />
      </FavoriteProvider>
    </Provider>
  );
}

export default App;
