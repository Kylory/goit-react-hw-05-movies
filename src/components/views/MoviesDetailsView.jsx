import { useState, useEffect } from "react";
import { useParams, NavLink, useRouteMatch, Route } from "react-router-dom";
import { fetchMovie, FetchMovieCast } from "../ApiServise/ApiServise";

const MoviesView = () => {
  const [stateMovie, setStateMovie] = useState();
  // const [stateMovieCast, setStateMovieCast] = useState();
  // const [stateIsLoadCast, setStateIsLoadCast] = useState(false);

  const { movieId } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    fetchMovie(movieId).then((response) => setStateMovie(response));
  }, [movieId]);

  // const onFetchMovieCast = () => {
  //   console.log("onFetchMovieCast");
  // };
  // useEffect(() => {
  //   FetchMovieCast(movieId).then((response) => setStateMovieCast(response));
  // }, []);

  // const FetchMovieCast1 = () => {
  //   console.log(movieId);
  //   FetchMovieCast(movieId).then((response) => setStateMovieCast(response));
  //   // return movieId;
  // };

  // const FetchMovieCast1 = () => {
  //   // setStateIsLoadCast(true);
  //   console.log("hello");
  // };

  // useEffect(() => {
  //   FetchMovieCast(movieId).then((response) => setStateMovieCast(response));
  // }, [stateIsLoadCast]);

  // const { title, vote_average, overview, genres } = stateMovie;

  return (
    <>
      <button type="button">Go back</button>
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
      <Route path={`${url}/cast`}>
        <FetchMovieCast movieId={movieId} />
      </Route>
      <Route path={`${url}/reviews`}></Route>
    </>
  );
};

export default MoviesView;
