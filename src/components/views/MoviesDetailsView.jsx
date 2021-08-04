import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../ApiServise/ApiServise";

const MoviesView = () => {
  const [stateMovie, setStateMovie] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovie(movieId).then((response) => setStateMovie(response));
  }, [movieId]);

  // const { title, vote_average, overview, genres } = stateMovie;

  return (
    <>
      <div>Movie {movieId}</div>
      <button type="button">Go back</button>
      {stateMovie && (
        <section>
          <img src={`${stateMovie.homepage}${stateMovie.poster_path}`} alt="" />
          <h1>{stateMovie.title}</h1>
          <p>vote_average {stateMovie.vote_average}</p>
          <h2>Overview</h2>
          <p>{stateMovie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {stateMovie.genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default MoviesView;
