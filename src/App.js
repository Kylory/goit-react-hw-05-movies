import { Switch, Route } from "react-router-dom";
import HomeView from "../src/components/views/HomeView";
import MoviesView from "./components/views/MoviesView";
import Navigation from "./components/Navigation/Navigation";
import NotFoundView from "./components/views/NotFoundView";

const App = () => {
  return (
    <>
      <Navigation />

      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/movies">
          <MoviesView />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </>
  );
};

export default App;
