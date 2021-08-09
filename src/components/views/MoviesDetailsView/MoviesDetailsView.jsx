import { useState, useEffect } from "react";
import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import { fetchMovie } from "../../ApiServise/ApiServise";
import CastView from "../CastView/CastView";
import ReviewsView from "../ReviewsView/ReviewsView";
import styles from "./MoviesDetailsView.module.css";

const MoviesView = () => {
  const [stateMovie, setStateMovie] = useState();

  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const { state } = useLocation();
  // const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    fetchMovie(movieId).then((response) => setStateMovie(response));
  }, [movieId]);

  const goBack = () => {
    state?.from.pathname
      ? history.push(state.from.pathname)
      : history.push("/");

    if (state?.from.search) {
      history.push({
        search: state.from.search,
      });
    }
    // console.log("goBack", location);
  };

  return (
    <>
      <button className={styles.goBackBtn} type="button" onClick={goBack}>
        Go back
      </button>
      {stateMovie && (
        <section className={styles.section}>
          <div className={styles.wrapper}>
            <img
              src={`https://image.tmdb.org/t/p/w200${stateMovie.poster_path}`}
              alt={stateMovie.title}
            />
            <div className={styles.description}>
              <h2>{stateMovie.title}</h2>
              <p>User score {stateMovie.vote_average}</p>
              <h3>Overview</h3>
              <p>{stateMovie.overview}</p>
              <h3>Genres</h3>
              <ul>
                {stateMovie.genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: { ...state },
            }}
          >
            Cast
          </NavLink>
          <br />
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: { ...state },
            }}
          >
            Reviews
          </NavLink>
          <hr />
        </section>
      )}
      <Route
        path={`${url}/cast`}
        render={() => <CastView movieId={movieId} />}
      ></Route>
      <Route
        path={`${url}/reviews`}
        render={() => <ReviewsView movieId={movieId} />}
      ></Route>
    </>
  );
};

export default MoviesView;
