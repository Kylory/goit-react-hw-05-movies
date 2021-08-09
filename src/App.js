import { Switch, Route } from "react-router-dom";
import HomeView from "../src/components/views/HomeView/HomeView";
import MoviesView from "./components/views/MoviesView/MoviesView";
import MoviesDetailsView from "./components/views/MoviesDetailsView/MoviesDetailsView";
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

        <Route path="/movies/:movieId">
          <MoviesDetailsView />
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
