import { Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// import HomeView from "../src/components/views/HomeView/HomeView";
// import MoviesView from "./components/views/MoviesView/MoviesView";
// import MoviesDetailsView from "./components/views/MoviesDetailsView/MoviesDetailsView";
// import Navigation from "./components/Navigation/Navigation";
// import NotFoundView from "./components/views/NotFoundView";

const HomeView = lazy(() =>
  import(
    "../src/components/views/HomeView/HomeView" /*webpackChunkName: "home-view" */
  )
);
const MoviesView = lazy(() =>
  import(
    "./components/views/MoviesView/MoviesView" /*webpackChunkName: "movies-view" */
  )
);
const MoviesDetailsView = lazy(() =>
  import(
    "./components/views/MoviesDetailsView/MoviesDetailsView" /*webpackChunkName: "movies-details-view" */
  )
);
const Navigation = lazy(() =>
  import(
    "./components/Navigation/Navigation" /*webpackChunkName: "navigation" */
  )
);
const NotFoundView = lazy(() =>
  import(
    "./components/views/NotFoundView" /*webpackChunkName: "not-found-view" */
  )
);

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};

export default App;
