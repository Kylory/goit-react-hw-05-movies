import { useRouteMatch, useParams, useLocation } from "react-router-dom";

const MoviesView = () => {
  const url = useParams();
  console.log(url);

  const location = useLocation();
  console.log(location);
  return <div>MoviesView {location.pathname}</div>;
};

export default MoviesView;
