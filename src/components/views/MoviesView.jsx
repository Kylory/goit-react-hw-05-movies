import { Link } from "react-router-dom";
import { useState } from "react";
import { fetchMovieByQuery } from "../ApiServise/ApiServise";

const MoviesView = () => {
  const [stateQuery, setStateQuery] = useState("");
  const [stateMovies, setStateMovies] = useState([]);

  const onChangeQuery = (e) => {
    setStateQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovieByQuery(stateQuery)
      .then((response) => setStateMovies(response))
      .finally(reset());
  };

  const reset = () => {
    setStateQuery("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={stateQuery}
          onChange={onChangeQuery}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {stateMovies !== "" &&
          stateMovies.map(({ id, original_title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{original_title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MoviesView;
