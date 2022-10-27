import react from "react";
import { createClient, Provider } from "urql";
import Router from "./routes/router";

const client = createClient({
  url: "https://api.spacex.land/graphql/",
});

function App() {
  return (
    <Provider value={client}>
      <Router />
    </Provider>
  );
}

export default App;
