import { useState, useEffect } from "react";
import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  useHistory,
  // useLocation,
} from "react-router-dom";
import { fetchMovie } from "../ApiServise/ApiServise";
import CastView from "./CastView";
import ReviewsView from "./ReviewsView";

const MoviesView = () => {
  const [stateMovie, setStateMovie] = useState();

  const { movieId } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    fetchMovie(movieId).then((response) => setStateMovie(response));
  }, [movieId]);

  const history = useHistory();
  // const location = useLocation();
  // const CLhistory = () => {
  //   console.log(history);
  //   console.log(location);
  // };
  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <button type="button" onClick={goBack}>
        Go back
      </button>
      {stateMovie && (
        <section>
          <img
            src={`https://image.tmdb.org/t/p/w200${stateMovie.poster_path}`}
            alt={stateMovie.title}
          />
          <h1>{stateMovie.title}</h1>
          <p>User score {stateMovie.vote_average}</p>
          <h2>Overview</h2>
          <p>{stateMovie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {stateMovie.genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
          <br />
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </section>
      )}
      {/* <Route path={`${url}/cast`} component={showCast}></Route> */}
      <Route path={`${url}/cast`}>
        <CastView movieId={movieId} />
      </Route>
      <Route path={`${url}/reviews`}>
        <ReviewsView movieId={movieId} />
      </Route>
    </>
  );
};

export default MoviesView;
